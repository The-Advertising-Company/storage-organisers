<template>
    <NuxtLayout name="store" class="pt-20">
      <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-6">Checkout</h1>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Checkout Form -->
          <div class="lg:col-span-2">
            <form @submit.prevent="handleSubmit">
              <!-- Personal Information -->
              <div class="mb-6">
                <h2 class="text-xl font-semibold mb-4">Personal Information</h2>
                <div class="mb-4">
                  <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" v-model="form.name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
                </div>
                <div class="mb-4">
                  <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" v-model="form.email" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
                </div>
                <div class="mb-4">
                  <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
                  <input type="text" id="address" v-model="form.address" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
                </div>
              </div>
    
              <!-- Payment Information -->
              <div class="mb-6">
                <h2 class="text-xl font-semibold mb-4">Payment Information</h2>
                <div class="mb-4">
                  <label for="card-number" class="block text-sm font-medium text-gray-700">Card Number</label>
                  <input type="text" id="card-number" v-model="form.cardNumber" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
                </div>
                <div class="mb-4">
                  <label for="expiry-date" class="block text-sm font-medium text-gray-700">Expiry Date</label>
                  <input type="text" id="expiry-date" v-model="form.expiryDate" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
                </div>
                <div class="mb-4">
                  <label for="cvv" class="block text-sm font-medium text-gray-700">CVV</label>
                  <input type="text" id="cvv" v-model="form.cvv" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
                </div>
              </div>
    
              <button type="submit" class="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">Place Order</button>
            </form>
          </div>
    
          <!-- Cart Items -->
          <div>
            <b class="text-lg font-semibold my-5">Cart</b>
            <ul role="list" v-for="item in cartItems" :key="item.name" class="-my-6 divide-y divide-gray-200">
                    <li>
                        <div class="flex py-6">
                            <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img :src="item.image">
                      </div>

                      <div class="ml-4 flex flex-1 flex-col">
                        <div>
                          <div class="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href="#">{{ item.name }}</a>
                            </h3>
                            <p class="ml-4">{{ formatCurrency(item.price) }}</p>
                          </div>
                          <p class="mt-1 text-sm text-gray-500">Salmon</p>
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
                        </div>
                        <hr class="w-full bg-gray-900">
                    </li>
                    
            </ul>
            <div class="mt-6 flex justify-between">
                <h3 class="text-lg font-semibold">Total:</h3>
                <h3 class="text-lg font-semibold">{{ formatCurrency(totalPrice) }}</h3>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: [],
        cartItems: []
      }
    },
    computed: {
      totalPrice() {
        return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
      }
    },
    methods: {
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
  }
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  