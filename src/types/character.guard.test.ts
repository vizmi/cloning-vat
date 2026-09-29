import { describe, expect, it } from 'vitest'
import { createDefaultCharacter, isCharacter } from './character'

describe('isCharacter', () => {
  it('accepts a freshly created default character', () => {
    expect(isCharacter(createDefaultCharacter())).toBe(true)
  })

  it('rejects an empty object', () => {
    expect(isCharacter({})).toBe(false)
  })

  it('rejects null and non-objects', () => {
    expect(isCharacter(null)).toBe(false)
    expect(isCharacter(undefined)).toBe(false)
    expect(isCharacter('character')).toBe(false)
    expect(isCharacter(42)).toBe(false)
  })

  it('rejects a character missing a required stat', () => {
    const c = createDefaultCharacter() as unknown as Record<string, unknown>
    const stats = c.stats as Record<string, unknown>
    delete stats.BODY
    expect(isCharacter(c)).toBe(false)
  })

  it('rejects a character whose role is a string instead of number|null', () => {
    const c = createDefaultCharacter() as unknown as Record<string, unknown>
    c.role = 'Cop'
    expect(isCharacter(c)).toBe(false)
  })

  it('accepts a character whose role is a valid number', () => {
    const c = createDefaultCharacter()
    c.role = 0
    expect(isCharacter(c)).toBe(true)
  })

  it('rejects a character whose careerSkills entries are missing v', () => {
    const c = createDefaultCharacter() as unknown as Record<string, unknown>
    c.careerSkills = [{ id: 1 }]
    expect(isCharacter(c)).toBe(false)
  })

  it('rejects a character whose siblings is not an array of number arrays', () => {
    const c = createDefaultCharacter() as unknown as Record<string, unknown>
    c.siblings = ['not-a-path']
    expect(isCharacter(c)).toBe(false)
  })

  it('rejects a character missing the lifepath object entirely', () => {
    const c = createDefaultCharacter() as unknown as Record<string, unknown>
    delete c.lifepath
    expect(isCharacter(c)).toBe(false)
  })
})
