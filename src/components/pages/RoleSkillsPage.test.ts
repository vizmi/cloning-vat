import { describe, expect, it } from 'vitest'
import RoleSkillsPage from './RoleSkillsPage.vue'
import { mountPage } from './pageTestHarness'
import options from '../../options'

describe('RoleSkillsPage', () => {
  it('renders all role buttons and no career-skills section before a role is picked', () => {
    const wrapper = mountPage(RoleSkillsPage)
    options.roles.forEach((role) => expect(wrapper.text()).toContain(role.name))
    expect(wrapper.text()).not.toContain('points remaining')
  })

  it('regression: shows career skills after picking the FIRST role (index 0)', () => {
    const wrapper = mountPage(RoleSkillsPage, (character) => character.setRole(0))
    expect(wrapper.text()).toContain('points remaining')
  })
})
