<template>
    <div class="ml-32">
                <div class="mx-auto px-4 sm:px-6  lg:px-8">
                  <h2 class="font-semibold text-3xl">Products</h2>
                  <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 py-24">
                    <div v-for="product in paginatedProducts" :key="product.id" class="group">
                      <NuxtLink :to="`/store/${product.id}`">
                        <div class="aspect-w-1 aspect-h-1 w-32 h-32 overflow-hidden rounded-lg align-center text-center">
                          <img :src="product.image" alt="Product image" class="h-full w-full hover:opacity-75">
                        </div>
                        <h3 class="mt-4 text-sm text-gray-700">{{ product.title }}</h3>
                        <p class="mt-1 text-lg font-medium text-gray-900">{{ product.price }}</p>
                      </NuxtLink>
                    </div>
                </div>
              </div>
            </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const products = ref([])
const itemsPerPage = 8

const paginatedProducts = computed(() => {
  const start = (1 - 1) * itemsPerPage
  const end = start + itemsPerPage
  return products.value.slice(start, end)
})

onMounted(async () => {
    const { data } = await useFetch('https://fakestoreapi.com/products')
    products.value = data.value
    console.log("Hello world", products.value)
})
</script>

<style>
</style>
