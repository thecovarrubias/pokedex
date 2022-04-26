<template>
  <div class="w-full flex flex-col justify-center items-center p-4">
    <img class="h-24 md:h-32" src="./assets/img/logo.png" alt="Pokémon" />
    <input
      class="
        py-2
        px-4
        my-10
        w-full
        md:w-3/4
        lg:w-2/4
        rounded
        border border-l-zinc-300
      "
      type="text"
      placeholder="Pokémon Search"
      v-model="pokemon"
      @keyup.enter="getPokemon(pokemon)"
    />
  </div>
  <br />
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    <div
      class="flex items-center flex-col"
      v-for="(pokemon, index) in pokemons"
      :key="index"
    >
      <img
        :src="[pokemon.id ? getImage(pokemon.id) : getImage(index + 1)]"
        :alt="pokemon.name"
        :style="pokemonStyles"
      />
      <p class="capitalize">
        {{ pokemon.id ? pokemon.id : index + 1 }} - {{ pokemon.name }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    pokemons: [],
    pokemon: "",
  }),

  computed: {
    pokemonStyles() {
      return {
        height: 150 + "px",
      };
    },
  },

  created() {
    this.getPokemons(9);
  },

  methods: {
    getPokemon(pokemon) {
      if (pokemon !== "") {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`;
        axios
          .get(url)
          .then(({ data: { id, forms } }) => {
            const pokemonData = {
              id,
              name: forms[0].name,
              url: forms[0].url,
            };

            this.pokemons = [pokemonData];
          })
          .catch((err) => {
            this.pokemons = [];
            console.error(err);
          });
      } else {
        this.getPokemons(9);
      }
    },

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