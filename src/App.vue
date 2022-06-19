<template>
  <router-link :to="{ name: 'home' }">Home</router-link>
  <router-link :to="{ name: 'test' }">Test</router-link>
  <router-view />
</template>

<script>
export default {};
</script>