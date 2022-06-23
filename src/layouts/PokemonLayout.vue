<template>
  <!-- <router-link :to="{ name: 'home' }">Home</router-link> -->
  <Header />
  <router-view />
</template>

<script>
import Header from "../components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>