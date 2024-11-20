<template>
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
                <a @click.prevent="sortProducts('popularity')" href="#" class="font-medium text-gray-900 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Most Popular</a>
                <a @click.prevent="sortProducts('rating')" href="#" class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Best Rating</a>
                <a @click.prevent="sortProducts('newest')" href="#" class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Newest</a>
                <a @click.prevent="sortProducts('priceLowToHigh')" href="#" class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Price: Low to High</a>
                <a @click.prevent="sortProducts('priceHighToLow')" href="#" class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-4">Price: High to Low</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isSortOpen = ref(false)
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
    switch (criteria) {
        case 'popularity':
            // Assuming 'popularity' means the number of ratings
            products = products.value.sort((a, b) => b.rating.count - a.rating.count)
            break
        case 'rating':
            products = products.value.sort((a, b) => b.rating.rate - a.rating.rate)
            break
        case 'newest':
            // Assuming the newest products are sorted by ID
            products = products.value.sort((a, b) => b.id - a.id)
            break
        case 'priceLowToHigh':
                        const products =  products.value.sort((a, b) => a.price - b.price)
            console.log("This had been sorted by popularity " + v[1].title)
            break
        case 'priceHighToLow':
            products = products.value.sort((a, b) => b.price - a.price)
            break
        default:
            products
            break
    }
    isSortOpen.value = false
}

onMounted(async () => {
    await fetchProducts()
})
</script>

<style lang="scss" scoped>
</style>
