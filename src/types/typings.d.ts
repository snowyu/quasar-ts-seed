declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "quasar";
// Allow .json files imports
declare module "*.json";
