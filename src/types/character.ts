import type { StatKey } from './options'

export interface CharacterSkill {
  id: number
  v: number
}

export interface CharacterStyle {
  clothes: number | null
  hair: number | null
  affectations: number | null
}

export interface CharacterFamily {
  rank: number | null
  parents: number | null
  status: number | null
  childhood: number | null
}

export interface CharacterMotivation {
  personality: number | null
  person: number | null
  value: number | null
  people: number | null
  posession: number | null
}

export interface CharacterLifepath {
  age: number
  events: number[][]
}

export interface Character {
  handle: string
  story: string
  role: number | null
  characterPoints: number
  stats: Record<StatKey, number>
  ability: number
  careerSkills: CharacterSkill[]
  pickupSkills: CharacterSkill[]
  style: CharacterStyle
  origin: number | null
  language: number | null
  family: CharacterFamily
  siblings: number[][]
  motivation: CharacterMotivation
  lifepath: CharacterLifepath
}

const STAT_KEYS: StatKey[] = ['INT', 'REF', 'TECH', 'COOL', 'ATTR', 'LUCK', 'MA', 'BODY', 'EMP']

export function createDefaultCharacter(): Character {
  return {
    handle: '',
    story: '',
    role: null,
    characterPoints: 60,
    stats: {
      INT: 4,
      REF: 4,
      TECH: 4,
      COOL: 4,
      ATTR: 4,
      LUCK: 4,
      MA: 4,
      BODY: 4,
      EMP: 4,
    },
    ability: 1,
    careerSkills: [],
    pickupSkills: [],
    style: {
      clothes: null,
      hair: null,
      affectations: null,
    },
    origin: null,
    language: null,
    family: {
      rank: null,
      parents: null,
      status: null,
      childhood: null,
    },
    siblings: [],
    motivation: {
      personality: null,
      person: null,
      value: null,
      people: null,
      posession: null,
    },
    lifepath: {
      age: 21,
      events: [],
    },
  }
}

function isNumberOrNull(value: unknown): value is number | null {
  return value === null || typeof value === 'number'
}

function isNumberArray(value: unknown): value is number[] {
  return Array.isArray(value) && value.every((v) => typeof v === 'number')
}

function isCharacterSkillArray(value: unknown): value is CharacterSkill[] {
  return (
    Array.isArray(value) &&
    value.every(
      (s) =>
        typeof s === 'object' &&
        s !== null &&
        typeof (s as CharacterSkill).id === 'number' &&
        typeof (s as CharacterSkill).v === 'number',
    )
  )
}

function isRollPathArray(value: unknown): value is number[][] {
  return Array.isArray(value) && value.every((path) => isNumberArray(path))
}

export function isCharacter(value: unknown): value is Character {
  if (typeof value !== 'object' || value === null) return false
  const c = value as Record<string, unknown>

  if (typeof c.handle !== 'string') return false
  if (typeof c.story !== 'string') return false
  if (!isNumberOrNull(c.role)) return false
  if (typeof c.characterPoints !== 'number') return false
  if (typeof c.ability !== 'number') return false

  if (typeof c.stats !== 'object' || c.stats === null) return false
  const stats = c.stats as Record<string, unknown>
  if (!STAT_KEYS.every((key) => typeof stats[key] === 'number')) return false

  if (!isCharacterSkillArray(c.careerSkills)) return false
  if (!isCharacterSkillArray(c.pickupSkills)) return false

  if (typeof c.style !== 'object' || c.style === null) return false
  const style = c.style as Record<string, unknown>
  if (!isNumberOrNull(style.clothes) || !isNumberOrNull(style.hair) || !isNumberOrNull(style.affectations)) return false

  if (!isNumberOrNull(c.origin)) return false
  if (!isNumberOrNull(c.language)) return false

  if (typeof c.family !== 'object' || c.family === null) return false
  const family = c.family as Record<string, unknown>
  if (
    !isNumberOrNull(family.rank) ||
    !isNumberOrNull(family.parents) ||
    !isNumberOrNull(family.status) ||
    !isNumberOrNull(family.childhood)
  )
    return false

  if (!isRollPathArray(c.siblings)) return false

  if (typeof c.motivation !== 'object' || c.motivation === null) return false
  const motivation = c.motivation as Record<string, unknown>
  if (
    !isNumberOrNull(motivation.personality) ||
    !isNumberOrNull(motivation.person) ||
    !isNumberOrNull(motivation.value) ||
    !isNumberOrNull(motivation.people) ||
    !isNumberOrNull(motivation.posession)
  )
    return false

  if (typeof c.lifepath !== 'object' || c.lifepath === null) return false
  const lifepath = c.lifepath as Record<string, unknown>
  if (typeof lifepath.age !== 'number') return false
  if (!isRollPathArray(lifepath.events)) return false

  return true
}
