<template>
  <nav class="bg-gray-50 h-14 px-4 md:px-6 lg:px-8">
    <div :class="['h-full flex flex-row items-center text-lg text-gray-600', justifyElements]">
      <router-link
        v-if="currentRoute"
        :to="{ name: 'pokemons' }"
      >
        <i class="bi bi-chevron-left" />
      </router-link>
      <div class="flex flex-row">
        <i class="bi bi-bookmark" />
        <i class="bi bi-moon ml-2 md:ml-4 lg:ml-6" />
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { useRoute } from 'vue-router'
  import { computed } from 'vue'

  const route = useRoute()
  const currentRoute = computed(() => route.name === 'pokemon')
  const justifyElements = computed(() =>
    route.name === 'pokemon' ? 'justify-between' : 'justify-end'
  )
</script>
