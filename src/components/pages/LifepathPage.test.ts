import { describe, expect, it } from 'vitest'
import LifepathPage from './LifepathPage.vue'
import { mountPage } from './pageTestHarness'

describe('LifepathPage', () => {
  it('shows "no events" copy before rolling a lifepath', () => {
    const wrapper = mountPage(LifepathPage)
    expect(wrapper.text()).toContain('No events to show')
  })

  it('lists decoded lifepath events once rolled', () => {
    const wrapper = mountPage(LifepathPage, (character) => {
      character.char.value.lifepath.events = [[0, 0]]
    })
    expect(wrapper.text()).not.toContain('No events to show')
    expect(wrapper.find('dt').exists()).toBe(true)
  })
})
