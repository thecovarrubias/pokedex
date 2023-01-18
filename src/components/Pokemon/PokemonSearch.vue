<template>
  <div class="w-full flex flex-col justify-center items-center p-4">
    <img class="h-24 md:h-32" src="../../assets/img/logo.png" alt="Pokémon" />
    <input class="
        py-2
        px-4
        my-10
        w-full
        md:w-3/4
        xl:w-2/4
        rounded
        border border-l-zinc-300
      " type="text" placeholder="Search" v-model="pokemon" @keyup.enter="search" />
  </div>
</template>

<script>
import usePokemon from "../../composables/usePokemon";

export default {
  setup() {
    const { pokemon, searchPokemon } = usePokemon();

    return {
      pokemon,

      search: () => {
        if (pokemon.value === "") return;

        searchPokemon(pokemon.value);
        pokemon.value = "";
      },
    };
  },
};
</script>