<template>
  <div class="w-full flex flex-col justify-center items-center p-4">
    <img
      class="h-24 md:h-32"
      src="../../assets/img/logo.png"
      alt="Pokémon"
    >

    <input
      v-model="pokemon"
      class="py-2 px-4 my-10 w-full md:w-3/4 xl:w-2/4 rounded border border-l-zinc-300"
      type="text"
      placeholder="Search"
      @keyup.enter="search"
    >
  </div>
</template>

<script setup>
  import usePokemon from '../../composables/usePokemon'

  const { pokemon, searchPokemon } = usePokemon()

  const search = () => {
    if (pokemon.value === '') return

    searchPokemon(pokemon.value)
    pokemon.value = ''
  }
</script>
