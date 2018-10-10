<!-- src/components/Hello.vue -->
<template>
    <q-list no-border>
      <q-item class="greeting">Hello {{title}}{{exclamationMarks}}</q-item>
      <q-btn id="btnDec" @click="decrement">-</q-btn>
      <q-btn id="btnInc" @click="increment">+</q-btn>
    </q-list>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: 'Hello',
    props: {title: {type: String}, initialEnthusiasm: {default: 1, type: Number}},
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
