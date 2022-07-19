<template>
  <article
    class="
      pokemon-item
      flex flex-colum
      justify-around
      rounded
      border border-gray-100
      p-4
      bg-white
      transition-all
      hover:drop-shadow-xl
    "
  >
    <div class="flex flex-col justify-around">
      <h2 class="font-semibold text-xl">
        {{ pokemonNumber }}
      </h2>
      <h3 class="capitalize font-semibold text-lg">{{ pokemonName }}</h3>
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
            mr-2
          "
          v-for="(type, index) in pokemonTypes"
          :key="index"
        >
          {{ type }}
        </span>
      </div>
    </div>
    <router-link :to="{ name: 'pokemon', params: { id: pokemonId } }">
      <img :src="pokemonImage" :alt="pokemonName" style="height: 160px" />
    </router-link>
  </article>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    pokemonName: {
      type: String,
      required: true,
    },
    pokemonImage: {
      type: String,
      required: true,
    },
    pokemonTypes: {
      type: Array,
      required: true,
    },
  },

  setup(props) {
    const { pokemonId, pokemonName, pokemonImage, pokemonTypes } = props;

    const pokemonNumber = computed(() =>
      pokemonId < 10
        ? "#00" + pokemonId
        : pokemonId >= 10 && pokemonId < 100
        ? "#0" + pokemonId
        : "#" + pokemonId
    );

    return {
      pokemonId,
      pokemonName,
      pokemonImage,
      pokemonTypes,
      
      pokemonNumber,
    };
  },
};
</script>