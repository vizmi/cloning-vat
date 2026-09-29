import { computed, ref, watch } from 'vue'
import type { Character } from '../types/character'
import { createDefaultCharacter } from '../types/character'
import type { Options } from '../types/options'
import { calculateBtm, calculateLeap, calculateLift, calculateRun } from './statFormulas'

export function useCharacter(options: Options) {
  const char = ref<Character>(createDefaultCharacter())

  const cpSpent = computed(() => {
    const s = char.value.stats
    return s.INT + s.REF + s.TECH + s.COOL + s.ATTR + s.LUCK + s.MA + s.BODY + s.EMP
  })

  const cpLeft = computed(() => char.value.characterPoints - cpSpent.value)

  const run = computed(() => calculateRun(char.value.stats.MA))
  const leap = computed(() => calculateLeap(run.value))
  const lift = computed(() => calculateLift(char.value.stats.BODY))
  const btm = computed(() => calculateBtm(char.value.stats.BODY))

  const careerSkillPointsLeft = computed(() => {
    return 40 - char.value.ability - char.value.careerSkills.reduce((acc, skill) => acc + skill.v, 0)
  })

  const pickupSkillPointsLeft = computed(() => {
    return (
      char.value.stats.INT +
      char.value.stats.REF -
      char.value.pickupSkills.reduce((acc, skill) => acc + skill.v, 0)
    )
  })

  const pickupSkillsAvailable = computed(() => {
    return options.skills
      .map((s, i) => ({ id: i, stat: s.stat, name: s.name }))
      .filter(
        (s) =>
          !(
            char.value.careerSkills.some((cs) => cs.id === s.id) ||
            char.value.pickupSkills.some((ps) => ps.id === s.id)
          ),
      )
  })

  watch(cpLeft, () => {
    while (cpLeft.value < 0) {
      const stats = char.value.stats
      stats.INT = Math.max(stats.INT - 1, 1)
      stats.REF = Math.max(stats.REF - 1, 1)
      stats.TECH = Math.max(stats.TECH - 1, 1)
      stats.COOL = Math.max(stats.COOL - 1, 1)
      stats.ATTR = Math.max(stats.ATTR - 1, 1)
      stats.LUCK = Math.max(stats.LUCK - 1, 1)
      stats.MA = Math.max(stats.MA - 1, 1)
      stats.BODY = Math.max(stats.BODY - 1, 1)
      stats.EMP = Math.max(stats.EMP - 1, 1)
    }
  })

  watch(pickupSkillPointsLeft, () => {
    while (pickupSkillPointsLeft.value < 0) {
      char.value.pickupSkills.forEach((s) => {
        s.v = Math.max(s.v - 1, 0)
      })
    }
  })

  function setRole(newRole: number): void {
    if (newRole === char.value.role) return

    char.value.ability = 1
    char.value.careerSkills = options.roles[newRole].skills.map((id) => ({ id, v: 0 }))
    char.value.pickupSkills = []
    char.value.role = newRole
  }

  function addPickupSkill(skillId: number): void {
    char.value.pickupSkills.push({ id: skillId, v: 0 })
  }

  function removeZeroPickupSkills(): void {
    char.value.pickupSkills = char.value.pickupSkills.filter((s) => s.v > 0)
  }

  function originChanged(): void {
    char.value.language = null
  }

  function siblingGenderCount(gender: 0 | 1): number {
    return char.value.siblings.reduce((sum, path) => sum + (path[1] === gender ? 1 : 0), 0)
  }

  function loadCharacter(next: Character): void {
    char.value = next
  }

  return {
    char,
    options,
    cpSpent,
    cpLeft,
    run,
    leap,
    lift,
    btm,
    careerSkillPointsLeft,
    pickupSkillPointsLeft,
    pickupSkillsAvailable,
    setRole,
    addPickupSkill,
    removeZeroPickupSkills,
    originChanged,
    siblingGenderCount,
    loadCharacter,
  }
}

export type CharacterApi = ReturnType<typeof useCharacter>
