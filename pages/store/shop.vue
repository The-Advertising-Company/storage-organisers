<template>
  <NuxtLayout name="store">
    <div class="bg-white">
      <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900">Our Products</h1>
          <div class="flex items-center">
            <div class="relative inline-block text-left">
              <div>
                <button @click="toggleSort" type="button" class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true">
                  Sort
                  <svg class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
              <div v-if="isSortOpen" class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1" role="none">
                  <a @click.prevent="sortProducts('all')" href="#" class="font-medium text-gray-900 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">All</a>
                  <a @click.prevent="sortProducts('popularity')" href="#" class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Most Popular</a>
                  <a @click.prevent="sortProducts('rating')" href="#" class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Best Rating</a>
                  <a @click.prevent="sortProducts('newest')" href="#" class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Newest</a>
                  <a @click.prevent="sortProducts('priceLowToHigh')" href="#" class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Price: Low to High</a>
                  <a @click.prevent="sortProducts('priceHighToLow')" href="#" class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-4">Price: High to Low</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section aria-labelledby="products-heading" class="pb-24 pt-6">
          <h2 id="products-heading" class="sr-only">Products</h2>
          <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <!-- Filters -->
            <filterSection/>
            <!-- Product grid -->
            <div class="lg:col-span-3">
              <div class="bg-white col-span-2">
                <div class="mx-auto px-4 sm:px-6  lg:px-8">
                  <h2 class="sr-only">Products</h2>
                  <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
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
                  <!-- Pagination Controls -->
                  <div class="mt-6 flex justify-end">
                    <button @click="prevPage" :disabled="currentPage === 1" class="px-3 py-1 mx-1 bg-gray-200 text-gray-800 rounded">Previous</button>
                    <div  v-for="p in totalPages">
                      <p class="m-2 cursor-pointer">{{ p }}</p>
                    </div>
                    <button @click="nextPage" :disabled="currentPage === totalPages" class="px-3 py-1 mx-1 bg-gray-200 text-gray-800 rounded">Next</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </NuxtLayout>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue'

const isSortOpen = ref(false)
const sortCriteria = ref('all')
const currentPage = ref(1)
const itemsPerPage = 8

const toggleSort = () => {
  isSortOpen.value = !isSortOpen.value
}

const products = ref([])

const fetchProducts = async () => {
  const { data } = await useFetch('https://fakestoreapi.com/products')
  products.value = data.value
  console.log("Fetched products", products.value)
}

const sortProducts = (criteria) => {
  sortCriteria.value = criteria
  isSortOpen.value = false
  currentPage.value = 1
}

const sortedProducts = computed(() => {
  let sorted = [...products.value]
  switch (sortCriteria.value) {
    case 'popularity':
      sorted.sort((a, b) => b.rating.count - a.rating.count)
      break;
    case 'rating':
      sorted.sort((a, b) => b.rating.rate - a.rating.rate)
      break;
    case 'newest':
      sorted.sort((a, b) => b.id - a.id)
      break;
    case 'priceLowToHigh':
      sorted.sort((a, b) => a.price - b.price)
      break;
    case 'priceHighToLow':
      sorted.sort((a, b) => b.price - a.price)
      break;
    case 'all':
    default:
      break;
  }
  return sorted
})

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return sortedProducts.value.slice(start, end)
})

const totalPages = computed(() => Math.ceil(sortedProducts.value.length / itemsPerPage))

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1
  }
}

onMounted(async () => {
  await fetchProducts()
})
</script>

<style lang="scss" scoped>
</style>
