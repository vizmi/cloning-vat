import { mount } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import { describe, expect, it } from 'vitest'
import PointSpinner from './PointSpinner.vue'

const vuetify = createVuetify()

interface PointSpinnerProps {
  label: string
  labelWidth?: number
  modelValue: number
  min?: number
  max?: number
  step?: number
  readOnly?: boolean
}

function mountSpinner(props: PointSpinnerProps) {
  return mount(PointSpinner, {
    props,
    global: { plugins: [vuetify] },
  })
}

describe('PointSpinner', () => {
  it('renders the label and current value', () => {
    const wrapper = mountSpinner({ label: 'Stat', modelValue: 5 })
    expect(wrapper.text()).toContain('Stat')
    expect(wrapper.text()).toContain('5')
  })

  it('emits update:modelValue incremented by step, clamped to max', async () => {
    const wrapper = mountSpinner({ label: 'Stat', modelValue: 9, max: 10, step: 1 })
    const buttons = wrapper.findAll('button')
    await buttons[1].trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([10])
  })

  it('emits update:modelValue decremented by step, clamped to min', async () => {
    const wrapper = mountSpinner({ label: 'Stat', modelValue: 1, min: 0, step: 1 })
    const buttons = wrapper.findAll('button')
    await buttons[0].trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([0])
  })

  it('renders no +/- buttons when readOnly', () => {
    const wrapper = mountSpinner({ label: 'Run', modelValue: 12, readOnly: true })
    expect(wrapper.findAll('button')).toHaveLength(0)
  })
})
