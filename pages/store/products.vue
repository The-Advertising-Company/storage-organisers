<template>
    <div>
        <button @click="addProductsToLocalStorage">Add to localStorage</button>
    </div>
</template>

<script setup>
    const tileProducts = [
  {
    name: "Ceramic Tile 1",
    description: "High-quality ceramic tile for floors and walls.",
    price: 15.99,
    image: "/assets/images.jpg",
    categories: ["flooring"],
    quantity: 1
  },
  {
    name: "Porcelain Tile 2",
    description: "Durable porcelain tile suitable for indoor and outdoor use.",
    price: 20,
    image: "https://example.com/tile2.jpg",
    categories: ["flooring"],
    quantity: 1
  },
  {
    name: "Zim Tile 3",
    description: "High-quality ceramic tile for floors and walls.",
    price: 30.99,
    image: "/assets/images.jpg",
    categories: ["flooring"],
    quantity: 1
  },
  {
    name: "America Tile 4",
    description: "Durable porcelain tile suitable for indoor and outdoor use.",
    price: 25,
    image: "https://example.com/tile2.jpg",
    categories: ["flooring"],
    quantity: 1
  },
  {
    name: "Ceramic Tile 5",
    description: "High-quality ceramic tile for floors and walls.",
    price: 25.99,
    image: "/assets/images.jpg",
    categories: ["bathroom"],
    quantity: 1
  },
  {
    name: "Porcelain Tile 6",
    description: "Durable porcelain tile suitable for indoor and outdoor use.",
    price: 25.99,
    image: "https://example.com/tile2.jpg",
    categories: ["bathroom"],
    quantity: 1
  },
  {
    name: "African Tile 7",
    description: "High-quality ceramic tile for floors and walls.",
    price: 25.99,
    image: "/assets/images.jpg",
    categories: ["bathroom"],
    quantity: 1
  },
  {
    name: "Porcelain Tile 8",
    description: "Durable porcelain tile suitable for indoor and outdoor use.",
    price: 19.99,
    image: "https://example.com/tile2.jpg",
    categories: ["bathroom"],
    quantity: 1
  },
  {
    name: "Ceramic Tile 9",
    description: "High-quality ceramic tile for floors and walls.",
    price: 15.99,
    image: "/assets/images.jpg",
    categories: ["bathroom"],
    quantity: 1
  },
  {
    name: "Porcelain Tile 10",
    description: "Durable porcelain tile suitable for indoor and outdoor use.",
    price: 19.99,
    image: "https://example.com/tile2.jpg",
    categories: ["bathroom"]
  },
  {
    name: "Ceramic Tile 11",
    description: "High-quality ceramic tile for floors and walls.",
    price: 15.99,
    image: "/assets/images.jpg",
    categories: ["kitchen"],
    quantity: 1
  },
  {
    name: "Porcelain Tile 12",
    description: "Durable porcelain tile suitable for indoor and outdoor use.",
    price: 19.99,
    image: "https://example.com/tile2.jpg",
    categories: ["kitchen"],
    quantity: 1
  },
  {
    name: "Ceramic Tile 13",
    description: "High-quality ceramic tile for floors and walls.",
    price: 15.99,
    image: "/assets/images.jpg",
    categories: ["kitchen"],
    quantity: 1
  },
  {
    name: "Porcelain Tile 14",
    description: "Durable porcelain tile suitable for indoor and outdoor use.",
    price: 19.99,
    image: "https://example.com/tile2.jpg",
    categories: ["kitchen"],
    quantity: 1
  },
  {
    name: "Ceramic Tile 15",
    description: "High-quality ceramic tile for floors and walls.",
    price: 15.99,
    image: "/assets/images.jpg",
    categories: ["kitchen"],
    quantity: 1
  },
  {
    name: "Porcelain Tile 16",
    description: "Durable porcelain tile suitable for indoor and outdoor use.",
    price: 19.99,
    image: "https://example.com/tile2.jpg",
    categories: ["luxury"],
    quantity: 1
  },
  {
    name: "Ceramic Tile 17",
    description: "High-quality ceramic tile for floors and walls.",
    price: 15.99,
    image: "/assets/images.jpg",
    categories: ["luxury"]
  },
  {
    name: "Porcelain Tile 18",
    description: "Durable porcelain tile suitable for indoor and outdoor use.",
    price: 19.99,
    image: "https://example.com/tile2.jpg",
    categories: ["luxury"],
    quantity: 1
  },
  {
    name: "Ceramic Tile 19",
    description: "High-quality ceramic tile for floors and walls.",
    price: 15.99,
    image: "/assets/images.jpg",
    categories: ["luxury"],
    quantity: 1
  },
  {
    name: "Porcelain Tile 20",
    description: "Durable porcelain tile suitable for indoor and outdoor use.",
    price: 19.99,
    image: "https://example.com/tile2.jpg",
    categories: ["luxury"],
    quantity: 1
  },
  {
    name: "Ceramic Tile 21",
    description: "High-quality ceramic tile for floors and walls.",
    price: 15.99,
    image: "/assets/images.jpg",
    categories: ["outdoor"],
    quantity: 1
  },
  {
    name: "Porcelain Tile 22",
    description: "Durable porcelain tile suitable for indoor and outdoor use.",
    price: 19.99,
    image: "https://example.com/tile2.jpg",
    categories: ["outdoor"]
  },
  {
    name: "Ceramic Tile 23",
    description: "High-quality ceramic tile for floors and walls.",
    price: 15.99,
    image: "/assets/images.jpg",
    categories: ["outdoor"],
    quantity: 1
  },
  {
    name: "Porcelain Tile 24",
    description: "Durable porcelain tile suitable for indoor and outdoor use.",
    price: 19.99,
    image: "https://example.com/tile2.jpg",
    categories: ["outdoor"],
    quantity: 1
  },
  

  // Add more tile products as needed
];

// Function to generate a random ID
function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

// Function to add products to localStorage
function addProductsToLocalStorage(products) {
  // Check if localStorage already has products
  const existingProducts = JSON.parse(localStorage.getItem('tileProducts')) || [];
  
  // Concatenate new products with existing ones
  const updatedProducts = [...existingProducts, ...products.map(product => ({ ...product, id: generateId() }))];

  // Update localStorage with updated products
  localStorage.setItem('tileProducts', JSON.stringify(updatedProducts));
}
onMounted(() => {
    addProductsToLocalStorage(tileProducts)
    });
// Add tile products to localStorage


</script>

<style lang="scss" scoped>

</style>