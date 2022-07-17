<template>
  <div
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
      <p class="font-semibold text-lg">{{ pokemonId }}</p>
      <p class="capitalize font-semibold text-lg">{{ pokemonName }}</p>
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
    <router-link :to="{ pokemonName: 'pokemon', params: { pokemonId } }">
      <img :src="pokemonImage" :alt="pokemonName" style="height: 160px" />
    </router-link>
  </div>
</template>

<script>
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
};
</script>