<template>
    <NuxtLayout name="store">
        <div class="mt-44 mb-32 bg-gray-300 p-10 rounded-lg max-w-sm mx-auto text-center card">
            <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
            <p class="mt-7 text-6xl">Oops</p>
            <p class="mt-7">{{ error.message }}</p>
        </div>

    </NuxtLayout>
</template>

<script setup>
    defineProps(['error'])
</script>

<style lang="scss" scoped> 

</style>