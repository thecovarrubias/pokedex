<template>
  <h1 class="capitalize font-semibold text-2xl mb-4 text-center">
    {{ pokemon.name }}
  </h1>
  <img
    class="mx-auto"
    :src="pokemon.image"
    :alt="pokemon.name"
    style="height: 160px"
  />
</template>

<script>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

import usePokemon from "../composables/usePokemon";

export default {
  setup() {
    const route = useRoute();
    const pokemon = ref({});
    const { getPokemon } = usePokemon();

    const getPokemonDetail = async (id) => {
      pokemon.value = await getPokemon(id);
    };

    watch(
      () => route.params.id,
      () => getPokemonDetail(route.params.id)
    );

    getPokemonDetail(route.params.id);

    return {
      pokemon,
    };
  },
};
</script>