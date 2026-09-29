import { describe, expect, it } from 'vitest'
import FamilyPage from './FamilyPage.vue'
import { mountPage } from './pageTestHarness'

describe('FamilyPage', () => {
  it('shows "only child" copy when there are no siblings', () => {
    const wrapper = mountPage(FamilyPage)
    expect(wrapper.text()).toContain('You are the only child')
  })

  it('lists decoded sibling descriptions when siblings exist', () => {
    const wrapper = mountPage(FamilyPage, (character) => {
      character.char.value.siblings = [[0, 0, 0]]
    })
    expect(wrapper.text()).not.toContain('You are the only child')
    expect(wrapper.find('li').exists()).toBe(true)
  })
})
