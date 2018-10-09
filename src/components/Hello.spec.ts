import { shallowMount } from '@vue/test-utils';
import Hello from './Hello.vue';

describe('Hello.vue', () => {
  it('renders name test', () => {
    const l = 1;
    const wrapper = shallowMount(Hello, {
      propsData: { title: 'test' }
    });
    const vGreeting = wrapper.find('.greeting');
    expect(vGreeting.text()).toEqual('Hello test!');
  })

  it('matches snapshot', () => {
    const name = 'snap';
    let wrapper = shallowMount(Hello, {
      propsData: { title: name }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
