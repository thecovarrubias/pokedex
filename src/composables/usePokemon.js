import axios from "axios";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

const usePokemon = () => {
  const router = useRouter();
  const pokemons = ref([]);
  const pokemon = ref("");

  const getPokemon = async (val) => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${val}`;

    try {
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
        },
      } = await axios.get(apiUrl);

      const types = pokemonTypes.map((x) => x.type.name);

      const pokemon = {
        id,
        name,
        image,
        types,
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
    }
  };

  getPokemons(1, 9);

  return {
    pokemons,
    pokemon,

    getPokemon,
    searchPokemon: (id) => router.push({ name: "pokemon", params: { id } }),
  };
};

export default usePokemon;