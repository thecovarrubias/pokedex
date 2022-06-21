<template>
  <!-- <router-link :to="{ name: 'home' }">Home</router-link>
  <router-link :to="{ name: 'test' }">Test</router-link>
  <router-view /> -->
  <pokemons />
</template>

<script>
import Pokemons from './components/Pokemons.vue';
export default {
  components: { Pokemons },};
</script>