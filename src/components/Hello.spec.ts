/* eslint-disable */
/**
 * @jest-environment jsdom
 */

import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
// import * as Quasar from 'quasar';
import Hello from './Hello.vue';

describe('Hello.vue', () => {
  it('renders name test', () => {
    // const localVue = createLocalVue();
    // localVue.use(Quasar, { components: ['QBtn']});
    const l = 1;
    const wrapper = shallowMount(Hello, {
      propsData: { title: 'test' }
    });
    const vGreeting = wrapper.find('.greeting');
    expect(vGreeting.text()).toEqual('Hello test!');
  })

  it('click to increment and decrement', () => {
    const l = 1;
    const wrapper = mount(Hello, {
      propsData: { title: 'test' }
    });
    const vBtnInc = wrapper.find('#btnInc');
    const vBtnDec = wrapper.find('#btnDec');
    vBtnInc.trigger('click');
    const vGreeting = wrapper.find('.greeting');
    expect(vGreeting.text()).toEqual('Hello test!!');
    vBtnInc.trigger('click');
    expect(vGreeting.text()).toEqual('Hello test!!!');
    vBtnDec.trigger('click');
    expect(vGreeting.text()).toEqual('Hello test!!');
    vBtnDec.trigger('click');
    expect(vGreeting.text()).toEqual('Hello test!');
    vBtnDec.trigger('click');
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
