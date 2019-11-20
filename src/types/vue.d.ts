import Vue from 'vue';

interface IQuasarVue {
  version: string;
  theme: string;
  platform: any;
  lang: any;
  cordova: any;
  electron: any;
}

declare module "vue/types/vue" {
  interface Vue {
    $q: IQuasarVue;
  }
}

