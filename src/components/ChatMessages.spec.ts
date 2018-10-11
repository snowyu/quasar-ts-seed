/* eslint-disable */
/**
 * @jest-environment jsdom
 */

import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
// import * as Quasar from 'quasar';
import ChatMessages from './ChatMessages.vue';

describe('Hello.vue', () => {
  it('renders', (done) => {
    const wrapper = mount(ChatMessages);
    const vm = wrapper.vm;
    const vItems = wrapper.findAll('.q-message');
    // console.log(wrapper.html())
    expect(vItems).toHaveLength(24);
    const vScroll = wrapper.find('.scroll');
    expect((vm.$refs.infiniteLoading as any).scrollParent).toStrictEqual(vScroll.element);
    // it hard to test scroll:
    wrapper.trigger('scroll');
    vm.$nextTick(()=>{
      // console.log(vScroll['scrollTop'])
      done();
    })
  })

})
