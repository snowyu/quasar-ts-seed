
// https://github.com/quasarframework/quasar/issues/1744
import Quasar from 'quasar';
import Vue from 'vue';

Vue.use(Quasar);


// https://github.com/facebook/jest/issues/5164
// require("ts-node/register");

// the following for jest golbalSetup
// But it is loaded too early before babel transpiling.
// So use setupFiles instead.
module.exports = async function () {
};
