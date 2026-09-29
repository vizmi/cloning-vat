import { describe, expect, it } from 'vitest'
import CharacterSheetPage from './CharacterSheetPage.vue'
import { mountPage } from './pageTestHarness'
import options from '../../options'

describe('CharacterSheetPage', () => {
  it('regression: shows the Role name and ability when the FIRST role (index 0, "Cop") is selected', () => {
    const wrapper = mountPage(CharacterSheetPage, (character) => character.setRole(0))

    expect(wrapper.text()).toContain(options.roles[0].name)
    expect(wrapper.text()).toContain(options.roles[0].ability)
  })

  it('also shows Role name/ability for a non-zero role, for comparison', () => {
    const wrapper = mountPage(CharacterSheetPage, (character) => character.setRole(3))

    expect(wrapper.text()).toContain(options.roles[3].name)
    expect(wrapper.text()).toContain(options.roles[3].ability)
  })

  it('renders without throwing when no role has been selected yet', () => {
    const wrapper = mountPage(CharacterSheetPage)

    expect(wrapper.find('#charSheet').exists()).toBe(true)
  })
})
