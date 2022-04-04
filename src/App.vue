<template>
  <h1 class="font-bold text-3xl"><i class="bi bi-heart-fill" /> Pokédex</h1>
</template>

<script>
import axios from "axios";

export default {
  created() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/1")
      .then(({ data }) => console.log(data))
      .catch(console.error);
  },
};
</script>