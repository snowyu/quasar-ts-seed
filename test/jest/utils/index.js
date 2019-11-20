// this is mapped in jest.config.js to resolve @vue/test-utils
import { createLocalVue, shallowMount } from 'test-utils'

import Vuex from 'vuex'
import VueRouter from 'vue-router'
import * as All from 'quasar'
// import langEn from 'quasar/lang/en-us' // change to any language you wish! => this breaks wallaby :(
const { Quasar, date, QBtn, Cookies } = All

const components = Object.keys(All).reduce((object, key) => {
  const val = All[key]
  if (val && val.component && val.component.name != null) {
    object[key] = val
  }
  return object
}, {})

export const localVue = createLocalVueQuasar()
// localVue.use(Quasar, { components }) // , lang: langEn


export function createLocalVueQuasar() {
  const result = createLocalVue()
  result.use(Quasar, { components }) // , lang: langEn
  return result
}
