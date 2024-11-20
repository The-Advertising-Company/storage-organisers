<template>
    <NuxtLayout name="store">
        <div class="bg-white mb-12">
        <div class="pt-6">
          <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div class="h-3/4 w-3/4 rounded-lg bg-yellow-400 mt-10">
              <img :src="`${product.image}`" alt="product_img" class="h-full w-full">
            </div>
            <div class="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-1 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8  lg:pt-16">
            <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{{product.title}}</h1>
            </div>

            <div class="mt-4 lg:row-span-3 lg:mt-0">
              <h2 class="sr-only">Product information</h2>
              <p class="text-3xl tracking-tight text-gray-900">{{product.price}}</p>

              <div class="lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              
              <div class="">
                <h2 class="text-sm font-medium text-gray-900">Product Description</h2>

                <div class="mt-4 space-y-6">
                  <p class="text-sm text-gray-600">{{product.description}}</p>
                </div>
              </div>
            </div>
              <!-- Reviews -->
              <div>
                <h3 class="sr-only">Reviews</h3>
                <div class="flex items-center">
                  <div class="flex items-center">
                    <!-- Active: "text-gray-900", Default: "text-gray-200" -->
                    <svg class="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                    </svg>
                    <svg class="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                    </svg>
                    <svg class="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                    </svg>
                    <svg class="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                    </svg>
                    <svg class="text-gray-200 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="ml-1">{{ product.rating.rate }}</p>
                  <a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">{{product.rating.count}} reviews</a>
                </div>
              </div>

              <form class="mt-10">
                <button @click="addToCart(product)" class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to cart</button>
              </form>
            </div>

            
          </div>
          </div>    
        </div>
</div>
    </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';

    const {id} = useRoute().params
        const uri = 'https://fakestoreapi.com/products/' + id
        const {data: product} = await useFetch(uri, {key: id})

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