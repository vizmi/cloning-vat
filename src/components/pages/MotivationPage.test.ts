import { describe, expect, it } from 'vitest'
import MotivationPage from './MotivationPage.vue'
import { mountPage } from './pageTestHarness'

describe('MotivationPage', () => {
  it('renders all five motivation fields without throwing', () => {
    const wrapper = mountPage(MotivationPage)
    expect(wrapper.text()).toContain('Personality')
    expect(wrapper.text()).toContain('Person you value most')
    expect(wrapper.text()).toContain('What do you value most')
    expect(wrapper.text()).toContain('How do you feel about most people?')
    expect(wrapper.text()).toContain('Your most valued posession')
  })
})
