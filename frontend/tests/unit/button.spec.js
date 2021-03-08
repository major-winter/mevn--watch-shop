import Button from '@/components/ui/Button'
import { shallowMount } from '@vue/test-utils'

describe('Custom button', () => {
  const wrapper = shallowMount(Button)
  const button = wrapper.find('button')
  it('renders', () => {
    expect(button.exists()).toBe(true)
  })

  it('emits', async () => {
    await button.trigger('click')
    expect(button.emitted('clicked')).toBeTruthy()
  })
})