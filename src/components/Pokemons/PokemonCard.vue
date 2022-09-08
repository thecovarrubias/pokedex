<template>
  <article class="
      h-96
      lg:h-52
      flex flex-col-reverse
      lg:flex-row lg:justify-between
      rounded
      border border-gray-100
      p-4
      bg-white
      transition-all
      hover:drop-shadow-xl
      relative 
    ">
    <div class="absolute top-5 right-5 lg:top-0 lg:right-0 z-0">
      <svg class="h-44 md:h-40" fill="#e5e7eb" viewBox="0 0 512 512" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg">
        <path d="M450.46,256.09C449.35,175.17,399.81,102.71,324,73.79,247.59,44.67,157.49,69,105.82,132.13,54.4,195,46.61,285.58,88.49,355.68c41.8,69.95,123.74,106,203.55,91.63,91-16.37,156.14-98.12,158.35-189.14A20.16,20.16,0,0,0,450.46,256.09ZM119.05,174.38C152.76,118,220.23,87,285,99.43c69.4,13.29,120.43,70.47,128.83,139H318.41c-8.26-27.36-32-48-62.62-48-29.65,0-55.15,20.65-63.11,48H97.74A158,158,0,0,1,119.05,174.38ZM286.13,256.1c-2,38.75-60.67,39.4-60.67,0S284.17,217.33,286.13,256.1Zm24,149.79C246.85,428.58,175,408.74,132.3,356.82a157.53,157.53,0,0,1-34.57-83H192.6c7.91,27.39,33.7,48,63.19,48,30.67,0,54.36-20.68,62.62-48h95.45C406.61,333,367.54,385.32,310.14,405.89Z" />
      </svg>
    </div>
    <div class="
        h-36
        lg:h-auto
        flex flex-col
        text-center
        lg:text-left
        justify-around
      ">
      <h2 class="font-semibold text-lg">
        {{ pokemonNumber }}
      </h2>
      <h3 class="capitalize font-semibold text-xl">{{ pokemonName }}</h3>
      <div>
        <span :class="[typeClass, 'capitalize inline-block rounded-md px-3 py-1 text-sm font-semibold mr-2']"
          :key="index" v-for="({ name, typeClass }, index) in pokemonTypes">
          {{ name }}
        </span>
      </div>
    </div>
    <router-link :to="{ name: 'pokemon', params: { id: pokemonId } }">
      <img :src="pokemonImage" :alt="pokemonName" class="drop-shadow-lg h-44 md:h-40 mx-auto lg:mx-0 top-10 right-20 lg:top-8 lg:right-8 absolute" />
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
        ? "00" + pokemonId
        : pokemonId >= 10 && pokemonId < 100
          ? "0" + pokemonId
          : pokemonId
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