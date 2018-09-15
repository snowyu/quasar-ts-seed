# The Seed for adding the typescript supports

> modified from the starter project which created by `quasar-cli@0.17.15`.

* Vue with typescript supported
* Upgraded to use babel 7.0
* Typescript Declare files of the quasar and plugins injected properties.
* Use [vue-class-component](https://github.com/vuejs/vue-class-component) and  [vue-property-decorators](https://github.com/kaorun343/vue-property-decorator) to define component
* use [Jest](https://jestjs.io/) to unit test.
  * the quasar-cli known the .babelrc only, so I have to keep two babel config files, one(babel.config.js) for jest, .babelrc for quasar-cli
    * It's a quasar-cli bug.

```ts
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class YourComponent extends Vue {
  @Prop(Number) propA!: number
  @Prop({ default: 'default value' }) propB!: string
  @Prop([String, Boolean]) propC: string | boolean
}
```

It's equivalent to

```js
export default {
  props: {
    propA: {
      type: Number
    },
    propB: {
      default: 'default value'
    },
    propC: {
      type: [String, Boolean]
    },
  }
}
```

## Upgrade to use babel 7.0

Already upgraded. See `package.json` and `.babelrc`.

```bash
npx babel-upgrade --write
```

## Package Manager

Use Yarn as Package Manager.

```bash
yarn add package ## = npm install pacakge
yarn global add pacakge  ## = npm install -g package
```

## Cordava

init:

```bash
quasar mode -a cordova
cd src-cordoava
cordova platform add android
```

Run:

```bash
quasar dev -m cordova -T android
```


# Manual adding the typescript supports to quasar framework

Note: **This guide applies to the project created by quasar-cli.**

First install `typescript` and `ts-loader`packages in your project.

```bash
npm i -D typescript ts-loader
```

Then modified the `quasar.conf.js` file in your project:

```js
function extendTypescriptToWebpack(cfg) {
  // added the type-script supports
  cfg.resolve.extensions.push('.ts')
  cfg.module.rules.push({
    test: /\.ts$/,
    loader: 'ts-loader',
    options: { appendTsSuffixTo: [/\.vue$/] }
  })
}

module.exports = function (ctx) {
  return {
    ...,
    build: {
      ...,
      extendWebpack (cfg) {
        extendTypescriptToWebpack(cfg)
        ...
      }
    },

```

add `tsconfig.json` and `tslint.json` to the root folder of the project:

```js
// tsconfig.json
{
  "compilerOptions": {
    "sourceMap": true,
    "target": "es5",
    "strict": true,
    "experimentalDecorators": true,
    "module": "es2015",
    "moduleResolution": "node"
  },
  "include": [
    "./src/**/*"
  ]
}

// tslint.json
{
  "defaultSeverity": "error",
  "extends": [
      "tslint:recommended"
  ],
  "jsRules": {},
  "rules": {
      "quotemark": [
          true,
          "single"
      ],
      "indent": [
          true
      ],
      "interface-name": [
          false
      ],
      "arrow-parens": false,
      // Pending fix for shorthand property names.
      "object-literal-sort-keys": false
  },
  "rulesDirectory": []
}
```

Suggest to install `vue-class-component` and `vue-property-decorator`.

```bash
npm i vue-class-component vue-property-decorator
```
Now you can use this perfect class and property decorator with typescript.

```html
<!-- src/components/HelloDecorator.vue -->
<template>
    <q-page class="flex flex-center">
        <p class="greeting">Hello {{name}}{{exclamationMarks}}</p>
        <q-btn @click="decrement">-</q-btn>
        <q-btn @click="increment">+</q-btn>
    </q-page>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class HelloDecorator extends Vue {
    @Prop() name!: string;
    @Prop({default: 1}) initialEnthusiasm!: number;
    enthusiasm = this.initialEnthusiasm;
    increment() {
        this.enthusiasm++;
    }
    decrement() {
        if (this.enthusiasm > 1) {
            this.enthusiasm--;
        }
    }
    get exclamationMarks(): string {
        return Array(this.enthusiasm + 1).join('!');
    }
}
</script>

<style>
.greeting {
    font-size: 20px;
}
</style>
```

Or you should use this in vue file:

```html
<!-- src/components/Hello.vue -->
<template>
    <div>
        <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    name: 'Hello',
    props: {name, initialEnthusiasm: {default: 1, type: Number}},
    data() {
        return {
            enthusiasm: this.initialEnthusiasm,
        }
    },
    methods: {
        increment() { this.enthusiasm++; },
        decrement() {
            if (this.enthusiasm > 1) {
                this.enthusiasm--;
            }
        },
    },
    computed: {
        exclamationMarks(): string {
            return Array(this.enthusiasm + 1).join('!');
        }
    }
});
</script>
```

