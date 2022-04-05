<template>
  <h1>Pokémon</h1>
  <br />
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    <div
      class="flex items-center flex-col"
      v-for="(pokemon, index) in pokemons"
      :key="index"
    >
      <img
        :src="getImage(index + 1)"
        :alt="pokemon.name"
        :style="pokemonStyles"
      />
      <p class="capitalize">{{ index + 1  }} - {{ pokemon.name }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    pokemons: [],
  }),

  computed: {
    pokemonStyles() {
      return {
        height: 150 + "px",
      };
    },
  },

  created() {
    this.getPokemons(150);
  },

  methods: {
    getPokemons(items) {
      const url = `https://pokeapi.co/api/v2/pokemon?limit=${items}`;

      axios
        .get(url)
        .then(({ data: { results } }) => {
          this.pokemons = results;
        })
        .catch(console.error);
    },

    getImage(index) {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`;
    },
  },
};
</script>