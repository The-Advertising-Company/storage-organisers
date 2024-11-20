<template>
      <div class=" z-5 w-full flex justify-between p-5 bg-white fixed top-0 left-0 right-0 z-50 shadow-md">
        <!-- left side -->
        <div class="flex items-center">
            <div class="flex sm:hidden items-center">
                <button @click="toggleMenu" class="text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>
            </div>
            <!-- <NuxtLink to="/" class="h-8 w-8 mx-2">
                <img src="/assets/logo1.svg" class="h-full w-full" alt="logo">
            </NuxtLink> -->
            <NuxtLink to="/" class="text-gray-900 text-lg font-semibold">Storage Organisers</NuxtLink>
        </div>
        <!-- end of left side -->
        <!-- Right side -->
        <div class="flex items-center">
            <div class="hidden sm:flex">
                <NuxtLink to="/" class="mx-2 text-sm text-gray-800">Home</NuxtLink>
                <NuxtLink to="/store/shop/" class="mx-2 text-sm text-gray-800">Shop</NuxtLink>
                <NuxtLink to="/store/contact" class="mx-2 text-sm text-gray-800">Contact</NuxtLink>
            </div>
            <div @click="toggleAuth" class="mx-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16"> <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/> </svg>
            </div>
            <div @click="toggleCheckout" class="mx-3">
                <svg class="h-4 w-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
            </div>
        </div>
        <!-- end of right side -->
        
        <!-- Mobile Menu -->
        <div v-if="isMenuOpen" class="sm:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-40">
            <div class="p-4">
                <NuxtLink to="/" class="block my-2 text-gray-800">Home</NuxtLink>
                <NuxtLink to="/store/shop/" class="block my-2 text-gray-800">Shop</NuxtLink>
                <NuxtLink to="/store/contact" class="block my-2 text-gray-800">Contact</NuxtLink>
            </div>
        </div>
    </div>
    <div v-if="isCheckoutOpen" class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div class="fixed inset-0 overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">       
        <div class="pointer-events-auto w-screen max-w-md">
          <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
            <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
              <div class="flex items-start justify-between">
                <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                <div class="ml-3 flex h-7 items-center">
                  <button type="button" class="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                    <span class="absolute -inset-0.5"></span>
                    <span class="sr-only">Close panel</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div class="mt-8">
                <div class="flow-root">
                  <div>
                    <b class="text-lg font-semibold my-5">Cart</b>
                    <ul role="list" v-for="item in cartItems" :key="item.name" class="-my-6 divide-y divide-gray-200">
                            <li class="flex py-6">
                              <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img :src="item.image" class="p-2">
                              </div>

                              <div class="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div class="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href="#">{{ item.name }}</a>
                                    </h3>
                                    <p class="ml-4">{{ formatCurrency(item.price) }}</p>
                                  </div>
                                  <p class="mt-1 text-sm text-gray-500">{{item.categories}}</p>
                                </div>
                                <div class="flex flex-1 items-end justify-between text-sm">
                                  <p class="text-gray-500">
                                    <button @click="decreaseQuantity(item)" class=" mx-2 px-2 py-1 bg-blue-400 text-white rounded-sm">-</button>
                                {{ item.quantity }}
                                <button @click="increaseQuantity(item)" class=" mx-2 px-2 py-1 bg-blue-400 text-white rounded-sm">+</button>
                                  </p>

                                  <div class="flex">
                                    <button @click="removeItem(item)" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                  </div>
                                </div>
                              </div>
                            </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div class="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>{{ formatCurrency(totalPrice) }}</p>
              </div>
              <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
              <div class="mt-6">
                <NuxtLink to="/store/checkout" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</NuxtLink>
              </div>
              <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or
                  <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
    <div v-if="authOpen" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="closeAuth"></div>
    
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto" @click.self="closeAuth">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div class="absolute top-0 right-0 pt-4 pr-4">
            <button @click="closeAuth" class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <span class="sr-only">Close</span>
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg class="h-6 w-6 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
              </div>
              <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Storage Organisers store</h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">For some more customized experience.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button type="button" class="inline-flex w-full justify-center rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 sm:ml-3 sm:w-auto">Login</button>
            <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-950 hover:text-white sm:mt-0 sm:w-auto">Sign up</button>
          </div>
        </div>
      </div>
    </div>
    </div>

</template>

<script>

export default {
    data() {
        return {
            isMenuOpen: false,
            isCheckoutOpen: false,
            authOpen: false,
            form: [],
            cartItems: [],
            totalPrice: 20
        };
    },
    computed: {
    totalPrice() {
      let total = 0;
      for (let i = 0; i < this.cartItems.length; i++) {
        total += this.cartItems[i].price * this.cartItems[i].quantity;
      }
      return total;
    }
  },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        toggleCheckout() {
            this.isCheckoutOpen = !this.isCheckoutOpen;
        },
        toggleAuth() {
            this.authOpen = !this.authOpen;
        },
        closeAuth() {
            this.authOpen = false;
        },
        formatCurrency(value) {
        return `$${value.toFixed(2)}`;
      },
      increaseQuantity(item) {
            item.quantity++;
            this.saveCartItems();
        },
        decreaseQuantity(item) {
            if (item.quantity > 1) {
            item.quantity--;
            this.saveCartItems();
            }
        },
      loadCartItems() {
        const storedCartItems = localStorage.getItem('cart');
        
        if (storedCartItems) {
          this.cartItems = JSON.parse(storedCartItems);
        }
      },
      saveCartItems() {
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
      },
      removeItem(itemId) {
        
        this.cartItems = this.cartItems.filter(item => item !== itemId);
        this.saveCartItems();
      },
      handleSubmit() {
        // Handle form submission, e.g., send data to server
        alert('Order placed successfully!');
        // Clear form and cart for demonstration purposes
        this.form = {
          name: '',
          email: '',
          address: '',
          cardNumber: '',
          expiryDate: '',
          cvv: ''
        };
        this.cartItems = [];
        localStorage.removeItem('cart');
      }
    },
    created() {
      this.loadCartItems();
    },
};
</script>

<style>
/* Optional: Additional styling can be added here */
</style>
