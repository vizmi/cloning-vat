import type { Ref } from 'vue'
import type { Character } from '../types/character'
import type { Options, RollTree, RollTreeNode } from '../types/options'

export function d(size: number): number {
  return Math.floor(Math.random() * size + 1)
}

export function traverseRollTree(tree: RollTree, start: string, startDie = 10): number[] {
  const result: number[] = []
  let next: string | undefined = start
  let nextDie = startDie

  while (next) {
    const roll = d(nextDie)
    const rolled = tree[next].findIndex((entry) => entry.rolls.includes(roll))
    result.push(rolled)

    const node: RollTreeNode = tree[next][rolled]
    next = node.next
    nextDie = node.nextDie ?? 10
  }

  return result
}

export function decodeRollTree(tree: RollTree, start: string, rolls: number[], separator: string): string {
  let next = start

  const result = rolls.reduce((acc, item) => {
    const node: RollTreeNode = tree[next][item]
    if (node.next) next = node.next
    return acc + node.text + separator
  }, '')

  return result.slice(0, -separator.length)
}

export type RollTarget =
  | 'cp'
  | 'style'
  | 'style.clothes'
  | 'style.hair'
  | 'style.affectations'
  | 'origin'
  | 'family'
  | 'family.rank'
  | 'family.parents'
  | 'family.status'
  | 'family.childhood'
  | 'siblings'
  | 'motivation'
  | 'motivation.personality'
  | 'motivation.person'
  | 'motivation.value'
  | 'motivation.people'
  | 'motivation.posession'
  | 'age'
  | 'lifepath'

export function useRollTree(char: Ref<Character>, options: Options) {
  function rollCharacterPoints(): void {
    let total = 0
    for (let i = 0; i < 9; i++) {
      total += d(10)
    }
    char.value.characterPoints = total
  }

  function rollStyleClothes(): void {
    char.value.style.clothes = d(10) - 1
  }

  function rollStyleHair(): void {
    char.value.style.hair = d(10) - 1
  }

  function rollStyleAffectations(): void {
    char.value.style.affectations = d(10) - 1
  }

  function rollStyleAll(): void {
    rollStyleClothes()
    rollStyleHair()
    rollStyleAffectations()
  }

  function rollOrigin(): void {
    char.value.origin = d(10) - 1
    char.value.language = null
  }

  function rollFamilyRank(): void {
    char.value.family.rank = d(10) - 1
  }

  function rollFamilyParents(): void {
    char.value.family.parents = d(10) - 1
  }

  function rollFamilyStatus(): void {
    char.value.family.status = d(10) - 1
  }

  function rollFamilyChildhood(): void {
    char.value.family.childhood = d(10) - 1
  }

  function rollFamilyAll(): void {
    rollFamilyRank()
    rollFamilyParents()
    rollFamilyStatus()
    rollFamilyChildhood()
  }

  function rollSiblings(): void {
    const siblings: number[][] = []
    const roll = d(10)
    if (roll < 8) {
      for (let i = 0; i < roll; i++) {
        siblings.push(traverseRollTree(options.rollTree, 'sibling'))
      }
    }
    char.value.siblings = siblings
  }

  function rollMotivationPersonality(): void {
    char.value.motivation.personality = d(10) - 1
  }

  function rollMotivationPerson(): void {
    char.value.motivation.person = d(10) - 1
  }

  function rollMotivationValue(): void {
    char.value.motivation.value = d(10) - 1
  }

  function rollMotivationPeople(): void {
    char.value.motivation.people = d(10) - 1
  }

  function rollMotivationPosession(): void {
    char.value.motivation.posession = d(10) - 1
  }

  function rollMotivationAll(): void {
    rollMotivationPersonality()
    rollMotivationPerson()
    rollMotivationValue()
    rollMotivationPeople()
    rollMotivationPosession()
  }

  function rollAge(): void {
    char.value.lifepath.age = d(6) + d(6) + 16
  }

  function rollLifepath(): void {
    const events: number[][] = []
    for (let age = 16; age <= char.value.lifepath.age; age++) {
      events.push(traverseRollTree(options.rollTree, 'lifePath'))
    }
    char.value.lifepath.events = events
  }

  function roll(what: RollTarget): void {
    switch (what) {
      case 'cp':
        return rollCharacterPoints()
      case 'style':
        return rollStyleAll()
      case 'style.clothes':
        return rollStyleClothes()
      case 'style.hair':
        return rollStyleHair()
      case 'style.affectations':
        return rollStyleAffectations()
      case 'origin':
        return rollOrigin()
      case 'family':
        return rollFamilyAll()
      case 'family.rank':
        return rollFamilyRank()
      case 'family.parents':
        return rollFamilyParents()
      case 'family.status':
        return rollFamilyStatus()
      case 'family.childhood':
        return rollFamilyChildhood()
      case 'siblings':
        return rollSiblings()
      case 'motivation':
        return rollMotivationAll()
      case 'motivation.personality':
        return rollMotivationPersonality()
      case 'motivation.person':
        return rollMotivationPerson()
      case 'motivation.value':
        return rollMotivationValue()
      case 'motivation.people':
        return rollMotivationPeople()
      case 'motivation.posession':
        return rollMotivationPosession()
      case 'age':
        return rollAge()
      case 'lifepath':
        return rollLifepath()
    }
  }

  function decodeSiblingPath(path: number[]): string {
    return decodeRollTree(options.rollTree, 'sibling', path, ' ')
  }

  function decodeLifepathEvent(path: number[]): string {
    return decodeRollTree(options.rollTree, 'lifePath', path, ' - ')
  }

  return {
    roll,
    rollCharacterPoints,
    rollStyleAll,
    rollStyleClothes,
    rollStyleHair,
    rollStyleAffectations,
    rollOrigin,
    rollFamilyAll,
    rollFamilyRank,
    rollFamilyParents,
    rollFamilyStatus,
    rollFamilyChildhood,
    rollSiblings,
    rollMotivationAll,
    rollMotivationPersonality,
    rollMotivationPerson,
    rollMotivationValue,
    rollMotivationPeople,
    rollMotivationPosession,
    rollAge,
    rollLifepath,
    decodeSiblingPath,
    decodeLifepathEvent,
  }
}
