<!-- src/components/HelloDecorator.vue -->
<!-- This is an alternative way to define the Hello component using decorators -->
<template>
    <q-list no-border>
      <q-item class="greeting">Hello Decorator {{title}}{{exclamationMarks}}</q-item>
      <q-btn id="btnDec" @click="decrement">-</q-btn>
      <q-btn id="btnInc" @click="increment">+</q-btn>
    </q-list>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class HelloDecorator extends Vue {
    @Prop() title!: string;
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
