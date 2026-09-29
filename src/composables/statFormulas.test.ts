import { describe, expect, it } from 'vitest'
import { calculateBtm, calculateLeap, calculateLift, calculateRun } from './statFormulas'

describe('calculateRun', () => {
  it('is 3x movement allowance', () => {
    expect(calculateRun(4)).toBe(12)
    expect(calculateRun(10)).toBe(30)
    expect(calculateRun(1)).toBe(3)
  })
})

describe('calculateLeap', () => {
  it('is run / 4', () => {
    expect(calculateLeap(12)).toBe(3)
    expect(calculateLeap(30)).toBe(7.5)
  })
})

describe('calculateLift', () => {
  it('is 40x body', () => {
    expect(calculateLift(4)).toBe(160)
    expect(calculateLift(10)).toBe(400)
  })
})

describe('calculateBtm', () => {
  it('matches every documented breakpoint', () => {
    expect(calculateBtm(1)).toBe(0)
    expect(calculateBtm(2)).toBe(0)
    expect(calculateBtm(3)).toBe(-1)
    expect(calculateBtm(4)).toBe(-1)
    expect(calculateBtm(5)).toBe(-2)
    expect(calculateBtm(7)).toBe(-2)
    expect(calculateBtm(8)).toBe(-3)
    expect(calculateBtm(9)).toBe(-3)
    expect(calculateBtm(10)).toBe(-4)
    expect(calculateBtm(20)).toBe(-4)
  })
})
