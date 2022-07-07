<template>
  <div ref="scrollComponent">
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
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

import usePokemon from "../composables/usePokemon";

export default {
  setup() {
    const { pokemons, getPokemons } = usePokemon();

    const scrollComponent = ref(null);
    const lastItem = ref(9);

    onMounted(() => window.addEventListener("scroll", handleScroll));
    onUnmounted(() => window.addEventListener("scroll", handleScroll));

    const handleScroll = (e) => {
      let element = scrollComponent.value;

      if (element.getBoundingClientRect().bottom < window.innerHeight) {
        getPokemons(lastItem.value + 2, lastItem.value + 4);
        lastItem.value = lastItem.value + 4;
      }
    };

    getPokemons(1, lastItem.value);

    return {
      pokemons,
      scrollComponent,
    };
  },
};
</script>