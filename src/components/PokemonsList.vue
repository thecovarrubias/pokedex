<template>
  <div
    class="
      grid grid-cols-1
      md:grid-cols-2
      xl:grid-cols-3
      gap-10
      mb-10
      px-4
      lg:px-16
      xl:px-32
    "
  >
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
import usePokemon from "../composables/usePokemon";

export default {
  setup() {
    const { pokemons, getPokemons } = usePokemon();

    getPokemons(1, 9);

    return {
      pokemons,
    };
  },
};
</script>