/* eslint-disable */
/**
 * @jest-environment jsdom
 */

import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
// import * as Quasar from 'quasar';
import HelloDecorator from './HelloDecorator.vue';

describe('HelloDecorator.vue', () => {
  it('renders HelloDecorator test', () => {
    // const localVue = createLocalVue();
    // localVue.use(Quasar, { components: ['QBtn']});
    const l = 1;
    const wrapper = shallowMount(HelloDecorator, {
      propsData: { title: 'test' }
    });
    const vGreeting = wrapper.find('.greeting');
    expect(vGreeting.text()).toEqual('Hello Decorator test!');
  })

  it('click to increment and decrement', () => {
    const l = 1;
    const wrapper = mount(HelloDecorator, {
      propsData: { title: 'test' }
    });
    const vBtnInc = wrapper.find('#btnInc');
    const vBtnDec = wrapper.find('#btnDec');
    vBtnInc.trigger('click');
    const vGreeting = wrapper.find('.greeting');
    expect(vGreeting.text()).toEqual('Hello Decorator test!!');
    vBtnInc.trigger('click');
    expect(vGreeting.text()).toEqual('Hello Decorator test!!!');
    vBtnDec.trigger('click');
    expect(vGreeting.text()).toEqual('Hello Decorator test!!');
    vBtnDec.trigger('click');
    expect(vGreeting.text()).toEqual('Hello Decorator test!');
    vBtnDec.trigger('click');
    expect(vGreeting.text()).toEqual('Hello Decorator test!');
  })

  it('matches snapshot', () => {
    const name = 'snap';
    let wrapper = shallowMount(HelloDecorator, {
      propsData: { title: name }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
