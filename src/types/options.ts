export type StatKey = 'INT' | 'REF' | 'TECH' | 'COOL' | 'ATTR' | 'LUCK' | 'MA' | 'BODY' | 'EMP'

export interface Skill {
  name: string
  stat: StatKey
  choose: boolean
}

export interface Role {
  name: string
  ability: string
  skills: number[]
}

export interface Origin {
  name: string
  languages: string[]
}

export interface RollTreeNode {
  rolls: number[]
  text: string
  next?: string
  nextDie?: number
}

export type RollTree = Record<string, RollTreeNode[]>

export interface StyleOptions {
  clothes: string[]
  hair: string[]
  affectations: string[]
}

export interface FamilyOptions {
  rank: string[]
  parents: string[]
  status: string[]
  childhood: string[]
}

export interface MotivationOptions {
  personality: string[]
  person: string[]
  value: string[]
  people: string[]
  posession: string[]
}

export interface Options {
  stats: Record<StatKey, string>
  skills: Skill[]
  roles: Role[]
  style: StyleOptions
  origin: Origin[]
  family: FamilyOptions
  motivation: MotivationOptions
  rollTree: RollTree
}
