import { inject, type InjectionKey } from 'vue'
import type { useCharacter } from './useCharacter'
import type { useRollTree } from './useRollTree'

export type CharacterContext = ReturnType<typeof useCharacter> & ReturnType<typeof useRollTree>

export const CharacterKey: InjectionKey<CharacterContext> = Symbol('character')

export function useCharacterContext(): CharacterContext {
  const ctx = inject(CharacterKey)
  if (!ctx) {
    throw new Error('CharacterContext was not provided — useCharacterContext() must be called under App.vue')
  }
  return ctx
}
