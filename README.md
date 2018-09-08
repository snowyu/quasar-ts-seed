# The Seed for adding the typescript supports

## Upgrade to babel 7.0

See `package.json` and `.babelrc`.

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

