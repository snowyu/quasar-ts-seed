/* eslint-disable */
/**
 * @jest-environment jsdom
 */

import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
// import * as Quasar from 'quasar';
import ChatMessages from './ChatMessages.vue';
import { localVue } from "../../test/jest/utils";

describe('ChatMessages.vue', () => {
  const wrapper = mount(ChatMessages, {
    localVue
  })
  const vm = wrapper.vm
  it('renders', (done) => {
    const vItems = wrapper.findAll('.q-message');
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
