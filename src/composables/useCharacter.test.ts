import { nextTick } from 'vue'
import { describe, expect, it } from 'vitest'
import options from '../options'
import { useCharacter } from './useCharacter'

describe('useCharacter', () => {
  it('starts with cpLeft = characterPoints - default stat spend (36)', () => {
    const { cpLeft, char } = useCharacter(options)
    expect(char.value.characterPoints).toBe(60)
    expect(cpLeft.value).toBe(60 - 36)
  })

  it('computes run/leap/lift/btm from stats', () => {
    const { char, run, leap, lift, btm } = useCharacter(options)
    char.value.stats.MA = 6
    char.value.stats.BODY = 8
    expect(run.value).toBe(18)
    expect(leap.value).toBe(4.5)
    expect(lift.value).toBe(320)
    expect(btm.value).toBe(-3)
  })

  it('auto-clamps all stats down when characterPoints drops below current spend', async () => {
    const { char, cpLeft } = useCharacter(options)
    char.value.characterPoints = 10
    await nextTick()
    expect(cpLeft.value).toBeGreaterThanOrEqual(0)
    // floor for every stat is 1, so total spend can never go below 9
    const s = char.value.stats
    const total = s.INT + s.REF + s.TECH + s.COOL + s.ATTR + s.LUCK + s.MA + s.BODY + s.EMP
    expect(total).toBeLessThanOrEqual(10)
    Object.values(s).forEach((v) => expect(v).toBeGreaterThanOrEqual(1))
  })

  it('setRole populates careerSkills from options.roles[i].skills and resets ability', () => {
    const { char, setRole } = useCharacter(options)
    char.value.ability = 9
    setRole(0)
    expect(char.value.role).toBe(0)
    expect(char.value.ability).toBe(1)
    expect(char.value.careerSkills.map((s) => s.id)).toEqual(options.roles[0].skills)
    expect(char.value.careerSkills.every((s) => s.v === 0)).toBe(true)
  })

  it('setRole with the same role is a no-op', () => {
    const { char, setRole } = useCharacter(options)
    setRole(2)
    char.value.careerSkills[0].v = 5
    setRole(2)
    // careerSkills would have been reset to v:0 if setRole re-ran
    expect(char.value.careerSkills[0].v).toBe(5)
  })

  it('regression: selecting the first role (index 0) still satisfies a strict null check', () => {
    const { char, setRole } = useCharacter(options)
    setRole(0)
    expect(char.value.role).toBe(0)
    expect(char.value.role !== null).toBe(true)
  })

  it('careerSkillPointsLeft accounts for ability and career skill spend', () => {
    const { char, setRole, careerSkillPointsLeft } = useCharacter(options)
    setRole(0)
    expect(careerSkillPointsLeft.value).toBe(40 - 1)
    char.value.ability = 5
    char.value.careerSkills[0].v = 3
    expect(careerSkillPointsLeft.value).toBe(40 - 5 - 3)
  })

  it('pickupSkillsAvailable excludes skills already taken as career or pickup skills', () => {
    const { char, setRole, addPickupSkill, pickupSkillsAvailable } = useCharacter(options)
    setRole(0)
    const takenCareerIds = new Set(char.value.careerSkills.map((s) => s.id))
    expect(pickupSkillsAvailable.value.some((s) => takenCareerIds.has(s.id))).toBe(false)

    const availableId = pickupSkillsAvailable.value[0].id
    addPickupSkill(availableId)
    expect(pickupSkillsAvailable.value.some((s) => s.id === availableId)).toBe(false)
  })

  it('removeZeroPickupSkills strips only zero-value pickup skills', () => {
    const { char, addPickupSkill, removeZeroPickupSkills } = useCharacter(options)
    addPickupSkill(10)
    addPickupSkill(11)
    char.value.pickupSkills[1].v = 2
    removeZeroPickupSkills()
    expect(char.value.pickupSkills).toEqual([{ id: 11, v: 2 }])
  })

  it('originChanged resets language to null', () => {
    const { char, originChanged } = useCharacter(options)
    char.value.language = 3
    originChanged()
    expect(char.value.language).toBeNull()
  })

  it('siblingGenderCount counts brothers (0) and sisters (1) from roll paths', () => {
    const { char, siblingGenderCount } = useCharacter(options)
    char.value.siblings = [
      [0, 0, 0], // brother
      [0, 1, 0], // sister
      [0, 0, 1], // brother
    ]
    expect(siblingGenderCount(0)).toBe(2)
    expect(siblingGenderCount(1)).toBe(1)
  })
})
