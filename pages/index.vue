<template>
    <NuxtLayout name="store">
        <div class="w-full h-full relative">
        <div class="h-screen w-screen relative">
            <img src="/assets/banner1.jpg" class="w-full h-full object-cover" alt="">
            <div class="absolute inset-0 flex items-center  px-5 md:px-24">
                <div class="text-center md:text-left max-w-xl md:max-w-2xl">
                    <p class="text-lg md:text-2xl my-2 md:my-3 font-bold text-gray-800 uppercase">Just landed.</p>
                    <p class="text-gray-900 font-bold text-3xl py-3">The New Year Collection</p>
                    <p class="text-md md:text-lg my-2 md:my-3 font-light text-black mb-5">Our latest collection is here. Discover the <br>latest trends and styles for the new year.</p>
                    <NuxtLink to="/store/shop"class=" hover:bg-gray-800 hover:text-white bg-gray-900 py-2 px-4 rounded-md text-white text-sm md:text-lg font-bold">Shop now</NuxtLink>
                </div>
            </div>
        </div>
        </div>
        <!-- clients -->
         <clients/>
         <!-- end of clients -->
        <!-- Categories -->
        <categories/>     
        <!-- End of  Categories --> 
         <!-- Benefits -->
        <div class="w-full flex justify-between p-5 ">
    <!-- Item 1 -->
    <div class="bg-white rounded-lg p-5 flex mx-2 my-2 sm:mx-5 sm:my-0 sm:w-1/2 md:w-1/4">
        <svg class="h-16 w-16 mt-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
        <div class="grid ml-5">
            <div class="text-xl font-semibold">
                Free Shipping
            </div>
            <div class="text-lg">
                Free shipping on order over $50
            </div>
        </div>
    </div>

    <!-- Item 2 -->
    <div class="bg-white rounded-lg p-5 flex mx-2 my-2 sm:mx-5 sm:my-0 sm:w-1/2 md:w-1/4">
        <svg class="h-16 w-16 mt-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M21,12.22C21,6.73,16.74,3,12,3c-4.69,0-9,3.65-9,9.28C2.4,12.62,2,13.26,2,14v2c0,1.1,0.9,2,2,2h1v-6.1 c0-3.87,3.13-7,7-7s7,3.13,7,7V19h-8v2h8c1.1,0,2-0.9,2-2v-1.22c0.59-0.31,1-0.92,1-1.64v-2.3C22,13.14,21.59,12.53,21,12.22z"/><circle cx="9" cy="13" r="1"/><circle cx="15" cy="13" r="1"/><path d="M18,11.03C17.52,8.18,15.04,6,12.05,6c-3.03,0-6.29,2.51-6.03,6.45c2.47-1.01,4.33-3.21,4.86-5.89 C12.19,9.19,14.88,11,18,11.03z"/>
        </svg>
        <div class="grid ml-5">
            <div class="text-xl font-semibold">
                24/7 Customer Support
            </div>
            <div class="text-lg">
                24/7 online customer support
            </div>
        </div>
    </div>

    <!-- Item 3 -->
    <div class="bg-white rounded-lg p-5 flex mx-2 my-2 sm:mx-5 sm:my-0 sm:w-1/2 md:w-1/4">
        <svg class="h-16 w-16 mt-3" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>Spring Security</title>
            <path d="M20.59 2.066 11.993 0 3.41 2.066v6.612h4.557a3.804 3.804 0 0 0 0 .954H3.41v3.106C3.41 19.867 11.994 24 11.994 24s8.582-4.133 8.582-11.258V9.635h-4.545a3.616 3.616 0 0 0 0-.954h4.558zM12 12.262h-.006a3.109 3.109 0 1 1 .006 0zm-.006-4.579a.804.804 0 0 0-.37 1.52v.208l.238.237v.159l.159.159v.159l-.14.14.15.246v.159l-.16.189.223.222.246-.246V9.218a.804.804 0 0 0-.346-1.535zm0 .836a.299.299 0 1 1 .298-.299.299.299 0 0 1-.298.3z"/>
        </svg>
        <div class="grid ml-5">
            <div class="text-xl font-semibold">
                100% Payment Security
            </div>
            <div class="text-lg">
                Your payment is safe with us.
            </div>
        </div>
    </div>

    <!-- Item 4 -->
    <div class="bg-white rounded-lg p-5 flex mx-2 my-2 sm:mx-5 sm:my-0 sm:w-1/2 md:w-1/4">
        <svg class="h-16 w-16 mt-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
        <div class="grid ml-5">
            <div class="text-xl font-semibold">
                Free Shipping
            </div>
            <div class="text-lg">
                Free shipping on orders over $50
            </div>
        </div>
    </div>
        </div>
        <!-- end of Benefits -->
        <!-- Products -->
        <products/>
        <!-- End of products -->        
        <!-- Product Description modal -->
        <div v-if="isProdDescOpen" class="fixed py-5 inset-0 z-50 overflow-y-auto bg-gray-500 bg-opacity-75" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div class="relative z-10" role="dialog" aria-modal="true">
            <div class="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"></div>
            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div class="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                <div class="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                  <div class="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                    <button @click="isProdDescOpen = false" type="button" class="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8">
                      <span class="sr-only">Close</span>
                      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    <div class="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                      <div class="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                        <img src="https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg" alt="Two each of gray, white, and black shirts arranged on table." class="object-cover object-center">
                      </div>
                      <div class="sm:col-span-8 lg:col-span-7">
                        <h2 class="text-2xl font-bold text-gray-900 sm:pr-12">Basic Tee 6-Pack</h2>

                        <section aria-labelledby="information-heading" class="mt-2">
                          <h3 id="information-heading" class="sr-only">Product information</h3>

                          <p class="text-2xl text-gray-900">$192</p>

                          <!-- Reviews -->
                          <div class="mt-6">
                            <h4 class="sr-only">Reviews</h4>
                            <div class="flex items-center">
                              <div class="flex items-center">
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
                              <p class="sr-only">3.9 out of 5 stars</p>
                              <a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
                            </div>
                          </div>
                        </section>

                        <section aria-labelledby="options-heading" class="mt-10">
                          <h3 id="options-heading" class="sr-only">Product options</h3>

                          <form @submit.prevent="addToCart">
                            <div class="sm:flex sm:justify-between">
                              <fieldset>
                                <legend class="block text-sm font-medium text-gray-700">Size</legend>
                                <div class="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                  <label v-for="size in sizes" :key="size" class="relative block cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none">
                                    <input type="radio" name="size-choice" :value="size" v-model="selectedSize" class="sr-only" aria-labelledby="size-choice-0-label">
                                    <span :id="`size-choice-0-label-${size}`" class="text-sm font-medium text-gray-900">{{ size }}</span>
                                  </label>
                                </div>
                              </fieldset>
                            </div>
                            <button type="submit" class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to cart</button>
                          </form>

                          <p class="absolute top-4 left-4 text-center sm:static sm:mt-6">
                            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">View full details</a>
                          </p>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- end of Product description -->
        
    </NuxtLayout>
</template>

<script>
export default {
    data() {
        return {
            isProdDescOpen: false,
            // isProdDescOpen: true,
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            selectedSize: '',
            cart: [],
        };
    },
    computed: {
      totalPrice() {
        return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
      }

    },
    methods: {
        toggleProdDesc() {
            this.isProdDescOpen = !this.isProdDescOpen;
        },
        saveTotalPrice() {
        const totalPrice = this.totalPrice();
        localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
      },
        addToCart() {
      const item = {
        name: 'Basic Tee 6-Pack',
        price: 192,
        size: this.selectedSize,
        quantity: 1,
        image: 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg',
        categories: ["bathroom"]
      };
      this.cart.push(item);
      localStorage.setItem('cart', JSON.stringify(this.cart));
      this.saveTotalPrice();
      this.isProdDescOpen = false;
      alert('Item added to cart');
      reloadNuxtApp()
    },
    loadCart() {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        this.cart = JSON.parse(savedCart);
      }
    },
    },
    mounted() {
    this.loadCart();
  },
};
</script>

<style lang="scss" scoped>

</style>