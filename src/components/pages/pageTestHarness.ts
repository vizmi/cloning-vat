import { mount, type ComponentMountingOptions } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import type { Component } from 'vue'
import { CharacterKey } from '../../composables/characterProvider'
import { useCharacter } from '../../composables/useCharacter'
import { useRollTree } from '../../composables/useRollTree'
import options from '../../options'

const vuetify = createVuetify()

export function mountPage<T extends Component>(
  component: T,
  configure?: (character: ReturnType<typeof useCharacter>) => void,
  mountOptions?: ComponentMountingOptions<T>,
) {
  const character = useCharacter(options)
  const rollTree = useRollTree(character.char, options)
  configure?.(character)

  return mount(component, {
    ...mountOptions,
    global: {
      plugins: [vuetify],
      provide: {
        [CharacterKey as symbol]: { ...character, ...rollTree },
      },
      ...mountOptions?.global,
    },
  })
}
