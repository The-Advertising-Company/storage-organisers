<template>
    <div class="px-24 pt-14 pb-5">
        <h1 class="text-3xl font-semibold">Categories</h1>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 mt-5 mb-24 mx-24">
      <div v-for="cat in categories" :key="cat" class="flex justify-center">
        <NuxtLink :to="`/store/categories/${cat}`" class="w-full h-80 rounded-md overflow-hidden relative">
          <img class="w-full h-full object-cover" src="/assets/banner.jpg" alt="Category image">
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <h1 class="text-xl font-semibold text-white">{{ cat }}</h1>
            <p class="text-sm text-white">Best and durable.</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const categories = ref([])
  
  onMounted(async () => {
    const { data } = await useFetch('https://fakestoreapi.com/products/categories')
    categories.value = data.value
  })
  </script>
  
  <style scoped>
  /* Add any additional styles if necessary */
  </style>
  