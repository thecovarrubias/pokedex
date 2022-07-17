import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "pokemons",
    component: () => import(/* webpackChunkName: "Pokemons" */ "../components/Pokemons/PokemonsCards.vue"),
  },
  {
    path: "/pokemon/:id",
    name: "pokemon",
    component: () => import(/* webpackChunkName: "Pokemon" */ "../components/Pokemons/PokemonDetail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;