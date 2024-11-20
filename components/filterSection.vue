<template>
    <div>
      <!-- Filter Toggle Button for Mobile/Tablet -->
      <div class="lg:hidden p-4">
        <button @click="toggleFilters" class="flex items-center space-x-2 bg-gray-200 px-4 py-2 rounded-md">
          <svg class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM3 16a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" />
          </svg>
          <span class="text-gray-700">Filters</span>
        </button>
      </div>
  
      <form :class="{'hidden': !filtersOpen, 'block': filtersOpen, 'lg:block': true}">
        <!-- Categories Section -->
        <h3 class="sr-only">Categories</h3>
        <ul role="list" class="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
          <li><a href="#">Totes</a></li>
          <li><a href="#">Backpacks</a></li>
          <li><a href="#">Travel Bags</a></li>
          <li><a href="#">Hip Bags</a></li>
          <li><a href="#">Laptop Sleeves</a></li>
        </ul>
  
        <!-- Color Section -->
        <div class="border-b border-gray-200 py-6">
          <h3 class="-my-3 flow-root">
            <button @click="toggleSection(0)" type="button" class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" :aria-expanded="isSectionOpen(0)">
              <span class="font-medium text-gray-900">Color</span>
              <span class="ml-6 flex items-center">
                <svg v-if="!isSectionOpen(0)" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                </svg>
                <svg v-else class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                </svg>
              </span>
            </button>
          </h3>
          <div v-show="isSectionOpen(0)" class="pt-6">
            <div class="space-y-4">
              <div class="flex items-center">
                <input id="filter-color-0" name="color[]" value="white" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                <label for="filter-color-0" class="ml-3 text-sm text-gray-600">White</label>
              </div>
              <div class="flex items-center">
                <input id="filter-color-1" name="color[]" value="beige" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                <label for="filter-color-1" class="ml-3 text-sm text-gray-600">Beige</label>
              </div>
              <div class="flex items-center">
                <input id="filter-color-2" name="color[]" value="blue" type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                <label for="filter-color-2" class="ml-3 text-sm text-gray-600">Blue</label>
              </div>
              <div class="flex items-center">
                <input id="filter-color-3" name="color[]" value="brown" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                <label for="filter-color-3" class="ml-3 text-sm text-gray-600">Brown</label>
              </div>
              <div class="flex items-center">
                <input id="filter-color-4" name="color[]" value="green" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                <label for="filter-color-4" class="ml-3 text-sm text-gray-600">Green</label>
              </div>
              <div class="flex items-center">
                <input id="filter-color-5" name="color[]" value="purple" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                <label for="filter-color-5" class="ml-3 text-sm text-gray-600">Purple</label>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Additional sections (Category, Size) would follow the same pattern as above -->
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        filtersOpen: false,
        openSections: [],
      }
    },
    methods: {
      toggleFilters() {
        this.filtersOpen = !this.filtersOpen;
      },
      toggleSection(index) {
        if (this.openSections.includes(index)) {
          this.openSections = this.openSections.filter(i => i !== index);
        } else {
          this.openSections.push(index);
        }
      },
      isSectionOpen(index) {
        return this.openSections.includes(index);
      }
    }
  }
  </script>
  
  <style scoped>
  .collapse-icon {
    display: none;
  }
  </style>
  