<template>
  <main ref="scrollComponent">
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
        <router-link :to="{ name: 'pokemon', params: { id } }">
          <img :src="image" :alt="name" style="height: 160px" />
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

import usePokemon from "../composables/usePokemon";

export default {
  setup() {
    const { pokemons, getPokemons } = usePokemon();

    const scrollComponent = ref(null);
    const initItem = ref(1);
    const lastItem = ref(9);

    onMounted(() => window.addEventListener("scroll", handleScroll));
    onUnmounted(() => window.addEventListener("scroll", handleScroll));

    const handleScroll = () => {
      if (scrollComponent.value) {
        let element = scrollComponent.value;

        if (element.getBoundingClientRect().bottom < window.innerHeight) {
          initItem.value = lastItem.value + 1;
          lastItem.value = lastItem.value + 3;

          getPokemons(initItem.value, lastItem.value);
        }
      }
    };

    getPokemons(initItem.value, lastItem.value);

    return {
      pokemons,
      scrollComponent,
    };
  },
};
</script>