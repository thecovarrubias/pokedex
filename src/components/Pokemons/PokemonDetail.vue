<template>
  <router-link :to="{ name: 'pokemons' }">Back</router-link>
  <main
    class="flex flex-col md:flex-row justify-center items-center text-center"
  >
    <div class="mr-0 mb-10 md:mr-20 md:mb-0">
      <img :src="pokemon.image" :alt="pokemon.name" style="height: 225px" />
      <h1 class="capitalize font-semibold text-2xl my-4">
        {{ pokemon.name }}
      </h1>
      <div class="mt-4">
        <span
          class="
            capitalize
            inline-block
            bg-gray-200
            rounded-full
            px-3
            py-1
            font-semibold
            mx-2
          "
          v-for="({ name }, index) in pokemon.types"
          :key="index"
        >
          {{ name }}
        </span>
      </div>
    </div>
    <div class="chart-container">
      <canvas id="myChart" />
    </div>
  </main>
</template>

<script>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

import Chart from "chart.js/auto";

import usePokemon from "../../composables/usePokemon";

export default {
  setup() {
    const route = useRoute();
    const pokemon = ref({});

    const { getPokemon } = usePokemon();

    const getPokemonDetail = async (id) => {
      pokemon.value = await getPokemon(id);
    };

    watch(
      () => route.params.id,
      () => getPokemonDetail(route.params.id)
    );

    onMounted(async () => {
      await getPokemonDetail(route.params.id);

      const ctx = document.getElementById("myChart");

      new Chart(ctx, {
        type: "radar",
        data: {
          labels: [
            "HP",
            "Attack",
            "Defense",
            "Special Attack",
            "Special Defense",
            "Speed",
          ],
          datasets: [
            {
              label: "Stats",
              data: pokemon.value.stats,
              fill: true,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgb(255, 99, 132)",
              pointBackgroundColor: "rgb(255, 99, 132)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgb(255, 99, 132)",
            },
          ],
        },
        options: {
          elements: {
            line: {
              borderWidth: 3,
            },
          },
        },
      });
    });

    return {
      pokemon,
    };
  },
};
</script>

<style scoped>
.chart-container {
  height: 350px;
  width: 350px;
}
</style>