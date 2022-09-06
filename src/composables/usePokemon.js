import axios from "axios";

/* Vue */
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

/* Shared */
import { POKEMON_TYPES } from "../shared/pokemon_types";

const usePokemon = () => {
  const router = useRouter();

  const pokemon = ref("");
  const pokemons = ref([]);

  const getPokemon = async (val) => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${val}`;

    try {
      if (val === undefined) return;

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
          stats: pokemonStats,
        },
      } = await axios.get(apiUrl);

      const stats = pokemonStats.map((x) => x.base_stat);
      const types = pokemonTypes.map((x) => POKEMON_TYPES.filter((y) => x.type.name === y.type)[0]);

      const pokemon = {
        id,
        name,
        image,
        types,
        stats,
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
      pokemons.value.sort((x, y) => x.id - y.id);
    }
  };

  return {
    pokemon,
    pokemons,

    getPokemon,
    getPokemons,

    searchPokemon: (id) => router.push({ name: "pokemon", params: { id } }),
  };
};

export default usePokemon;