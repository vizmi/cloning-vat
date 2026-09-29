import { describe, expect, it } from 'vitest'
import StatsPage from './StatsPage.vue'
import { mountPage } from './pageTestHarness'

describe('StatsPage', () => {
  it('renders the stats wizard page without throwing', () => {
    const wrapper = mountPage(StatsPage)
    expect(wrapper.text()).toContain('Character points')
    expect(wrapper.text()).toContain('points remaining')
  })
})
