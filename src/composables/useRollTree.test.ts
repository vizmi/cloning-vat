import { ref } from 'vue'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { createDefaultCharacter } from '../types/character'
import options from '../options'
import { decodeRollTree, traverseRollTree, useRollTree } from './useRollTree'
import type { RollTree } from '../types/options'

const fixtureTree: RollTree = {
  start: [
    { rolls: [1, 2, 3, 4, 5], text: 'Alpha', next: 'leaf' },
    { rolls: [6, 7, 8, 9, 10], text: 'Beta', next: 'leaf' },
  ],
  leaf: [
    { rolls: [1, 2, 3, 4, 5], text: 'left' },
    { rolls: [6, 7, 8, 9, 10], text: 'right' },
  ],
}

function mockRolls(...values: number[]) {
  let call = 0
  vi.spyOn(Math, 'random').mockImplementation(() => {
    const value = values[Math.min(call, values.length - 1)]
    call++
    // d(size) = floor(random * size + 1), so to force `value` for a d10 roll: (value - 1) / 10
    return (value - 1) / 10
  })
}

// d(size) = floor(random * size + 1) -> to force `value` for a die of `size`: (value - 1) / size
function mockDieRolls(size: number, ...values: number[]) {
  let call = 0
  vi.spyOn(Math, 'random').mockImplementation(() => {
    const value = values[Math.min(call, values.length - 1)]
    call++
    return (value - 1) / size
  })
}

afterEach(() => {
  vi.restoreAllMocks()
})

describe('traverseRollTree', () => {
  it('walks next/nextDie until a node has no next', () => {
    mockRolls(2, 8) // -> 'start' index 0 (Alpha) -> 'leaf' index 1 (right)
    const path = traverseRollTree(fixtureTree, 'start')
    expect(path).toEqual([0, 1])
  })

  it('stops as soon as a node omits next', () => {
    mockRolls(9) // Beta has no further node under this fixture's 'leaf'... use single-level tree
    const singleLevel: RollTree = {
      only: [{ rolls: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], text: 'done' }],
    }
    const path = traverseRollTree(singleLevel, 'only')
    expect(path).toEqual([0])
  })

  it('the real sibling tree is always exactly 3 hops deep', () => {
    const path = traverseRollTree(options.rollTree, 'sibling')
    expect(path).toHaveLength(3)
  })
})

describe('decodeRollTree', () => {
  it('joins node text with the given separator and trims the trailing one', () => {
    const text = decodeRollTree(fixtureTree, 'start', [0, 1], ' ')
    expect(text).toBe('Alpha right')
  })

  it('does not leave a leading/trailing separator artifact for a single-element path', () => {
    const singleLevel: RollTree = {
      only: [{ rolls: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], text: 'done' }],
    }
    const text = decodeRollTree(singleLevel, 'only', [0], ' - ')
    expect(text).toBe('done')
  })
})

describe('useRollTree', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('rollAge sets age to 2d6 + 16', () => {
    mockDieRolls(6, 3, 4)
    const char = ref(createDefaultCharacter())
    const { rollAge } = useRollTree(char, options)
    rollAge()
    expect(char.value.lifepath.age).toBe(3 + 4 + 16)
  })

  it('rollLifepath produces one event per age from 16 up to the current age', () => {
    const char = ref(createDefaultCharacter())
    char.value.lifepath.age = 18
    const { rollLifepath } = useRollTree(char, options)
    rollLifepath()
    expect(char.value.lifepath.events).toHaveLength(18 - 16 + 1)
  })

  it('rollSiblings produces no siblings when the d10 roll is 8 or higher', () => {
    mockRolls(8)
    const char = ref(createDefaultCharacter())
    const { rollSiblings } = useRollTree(char, options)
    rollSiblings()
    expect(char.value.siblings).toHaveLength(0)
  })

  it('rollSiblings produces exactly `roll` siblings when roll < 8', () => {
    mockRolls(3)
    const char = ref(createDefaultCharacter())
    const { rollSiblings } = useRollTree(char, options)
    rollSiblings()
    expect(char.value.siblings).toHaveLength(3)
  })

  it('rollOrigin resets language to null', () => {
    const char = ref(createDefaultCharacter())
    char.value.language = 2
    const { rollOrigin } = useRollTree(char, options)
    rollOrigin()
    expect(char.value.language).toBeNull()
  })
})
