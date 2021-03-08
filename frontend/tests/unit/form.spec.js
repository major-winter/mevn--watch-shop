import AppForm from '../../src/components/ui/AppForm'
import { mount } from '@vue/test-utils'

describe('Login renders', () => {
  it('Email and Password', () => {
    const wrapper = mount(AppForm, {
      propsData: {
        formData: [
          { label: "Email", placeholder: "Enter your email", type: "text" },
          {
            label: "Password",
            placeholder: "Enter your password",
            type: "password",
          },
        ],
        // formTitle: '',
        // value: {}
      }
    })

    const label = wrapper.findAll('label')
    expect(label.at(0).text()).toContain('Email')
    expect(label.at(1).text()).toContain('Password')
  })

  it('should render Shipping', () => {
    const wrapper = mount(AppForm, {
      propsData: {
        formTitle: 'Shipping'
      }
    })
    const title = wrapper.find('h1')
    expect(title.text()).toContain('Shipping')
  })

})
