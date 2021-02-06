import AppFooter from '../../src/components/layout/AppFooter'
import { shallowMount } from '@vue/test-utils'

describe('Footer', () => {
  it('renders footer', () => {
    const wrapper = shallowMount(AppFooter)
    expect(wrapper.name()).toMatch('AppFooter')
  })

})
