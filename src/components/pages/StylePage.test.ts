import { describe, expect, it } from 'vitest'
import StylePage from './StylePage.vue'
import { mountPage } from './pageTestHarness'

describe('StylePage', () => {
  it('renders without throwing and hides the language field until an origin is chosen', () => {
    const wrapper = mountPage(StylePage)
    expect(wrapper.text()).toContain('Style')
    expect(wrapper.text()).toContain('Origins')
    expect(wrapper.text()).not.toContain('Language')
  })

  it('shows the language field once an origin is selected', () => {
    const wrapper = mountPage(StylePage, (character) => {
      character.char.value.origin = 0
    })
    expect(wrapper.text()).toContain('Language')
  })
})
