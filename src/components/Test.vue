<template>
  <h1>Test: {{ counter }}</h1>
  <button @click="incrementBy(1)">+1</button>
  <button @click="incrementBy(2)">+3</button>
  <button @click="incrementBy(3)">+5</button>
</template>

<script>
import { useCounterStore } from "../stores/counter";

export default {
  setup() {
    const { counter, incrementBy } = useCounterStore();

    return {
      counter,
      incrementBy,
    };
  },
};
</script>