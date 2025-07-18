<template>
  <PokemonSearch />
  <main ref="scrollComponent">
    <section
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-8 px-4 lg:px-16 xl:px-32"
    >
      <template v-for="{ id, name, image, types } in pokemons" :key="id">
        <PokemonCard
          :pokemon-id="id"
          :pokemon-name="name"
          :pokemon-image="image"
          :pokemon-types="types"
        />
      </template>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

/* Components */
import PokemonSearch from "../Pokemon/PokemonSearch.vue";
import PokemonCard from "../Pokemon/PokemonCard.vue";

/* Composables */
import usePokemon from "../../composables/usePokemon";

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
</script>
