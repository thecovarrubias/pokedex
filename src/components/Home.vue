<template>
  <h1>Home</h1>
  <p>{{ counter }}</p>
  <p>{{ numberOfChanges }}</p>
</template>

<script>
import { useCounterStore } from '../stores/counter';

export default {
  setup() {
    const { counter, numberOfChanges } = useCounterStore();

    return {
      counter,
      numberOfChanges,
    }
  }
}
</script>