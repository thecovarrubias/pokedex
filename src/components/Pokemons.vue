<template>
  <div class="w-full flex flex-col justify-center items-center p-4">
    <img class="h-24 md:h-32" src="../assets/img/logo.png" alt="Pokémon" />
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
      @keyup.enter="searchPokemon(pokemon)"
    />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 px-4">
    <div
      class="
        flex flex-colum
        justify-around
        rounded
        border border-l-zinc-300
        p-4
      "
      v-for="{ id, name, image, types } in pokemons"
      :key="id"
    >
      <div class="flex flex-col justify-around">
        <p class="font-semibold text-lg">{{ id }}</p>
        <p class="capitalize font-semibold text-lg">{{ name }}</p>
        <div>
          <span
            class="
              capitalize
              inline-block
              bg-gray-200
              rounded-full
              px-3
              py-1
              text-sm
              font-semibold
              text-gray-700
              mr-2
            "
            v-for="(type, index) in types"
            :key="index"
          >
            {{ type }}
          </span>
        </div>
      </div>
      <img :src="image" :alt="name" style="height: 160px" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "@vue/reactivity";

export default {
  setup() {
    const pokemons = ref([]);
    const pokemon = ref("");

    const getPokemon = async (val) => {
      const apiUrl = `https://pokeapi.co/api/v2/pokemon/${val}`;

      try {
        const {
          data: {
            id,
            name,
            sprites: {
              other: {
                "official-artwork": { front_default: image },
              },
            },
            types: pokemonTypes,
          },
        } = await axios.get(apiUrl);

        const types = pokemonTypes.map((x) => x.type.name);

        const pokemon = {
          id,
          name,
          image,
          types,
        };

        return pokemon;
      } catch (err) {
        console.error(err);
      }
    };

    const getPokemons = async (start, end) => {
      for (let i = start; i <= end; i++) {
        const pokemon = await getPokemon(i);
        pokemons.value.push(pokemon);
      }
    };

    getPokemons(1, 9);

    return {
      pokemons,
      pokemon,
      searchPokemon: (val) => console.log(val),
    };
  },
};
</script>