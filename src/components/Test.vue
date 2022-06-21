<template>
  <h1>Test: {{ counterStore.counter }}</h1>
  <button @click="counterStore.incrementBy(1)">+1</button>
  <button @click="counterStore.incrementBy(2)">+3</button>
  <button @click="counterStore.incrementBy(3)">+5</button>
</template>

<script>
import { useCounterStore } from "../stores/counter";

export default {
  setup() {
    const counterStore = useCounterStore();
    
    return {
      counterStore,
    };
  },
};
</script>