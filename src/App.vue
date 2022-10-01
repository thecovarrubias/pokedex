<template>
  <Navbar />
  <router-view />
</template>

<script>
/* Components */
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  }
}
</script>