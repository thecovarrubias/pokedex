import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    numberOfChanges: 0,
  }),

  actions: {
    incrementBy(value) {
      this.counter += value;
      this.numberOfChanges += 1;
    },
  }
});