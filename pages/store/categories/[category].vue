<template>
    <NuxtLayout name="store">
        <div class="ml-32">
                <div class="mx-auto px-4 sm:px-6  lg:px-8">
                  <h2 class="sr-only">Products</h2>
                  <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 py-24">
                    <div v-for="product in products" :key="product.id" class="group">
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
    </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';

    const {category} = useRoute().params
        const uri = 'https://fakestoreapi.com/products/category/' + category
        const {data: products} = await useFetch(uri, {key: category})

        const cart = ref(JSON.parse(localStorage.getItem('cart')) || [])
const isProdDescOpen = ref(false)

const saveCart = () => {
  localStorage.setItem('cart', JSON.stringify(cart.value))
}

const saveTotalPrice = () => {
  // Implement the logic to calculate the total price of items in the cart
}

const addToCart = (item) => {
  const prod = {
    name: item.title,
    price: item.price,
    category: item.category,
    quantity: 1,
    image: item.image,
  };
  cart.value.push(prod);
  saveCart();
  saveTotalPrice();
  isProdDescOpen.value = false;
  alert('Item added to cart');
  // Not sure about the context of reloadNuxtApp(), it's not part of Vue.js or the Composition API
}
</script>

<style lang="scss" scoped>

</style>