<template>
    <div class="relative h-screen">
        <slot></slot>
        <nav class="fixed bottom-0 bg-pink-500 w-full">
            <ul class="flex justify-between items-center py-4 px-8 text-white font-semibold text-xl">
                <li class="flex items-center">
                    <NuxtLink to="/"><FontAwesomeIcon icon="house" /></NuxtLink>
                </li>
                <li class="flex items-center">
                    <NuxtLink to="/linha-do-tempo"><FontAwesomeIcon icon="calendar-days" /></NuxtLink>
                </li>
                <li class="flex items-center">
                    <NuxtLink to="/planos"><FontAwesomeIcon icon="book" /></NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>