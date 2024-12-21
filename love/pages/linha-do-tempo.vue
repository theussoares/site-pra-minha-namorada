<template>
  <div class="py-8 sm:px-6 pb-20">
    <h2 class="text-3xl text-center font-semibold mb-6">Nossa Linha do Tempo</h2>
    <div class="space-y-6 flex flex-wrap gap-4">
      <div v-for="(evento, index) in eventos" :key="index" class="flex flex-col w-[380px] bg-white p-6 rounded-xl shadow-lg border border-t-pink-500">
        <h3 class="text-xl font-semibold text-pink-600 text-center">{{ evento.data }}</h3>
        <img width="380" :src="`/images/${evento.url}.jpeg`" alt="Foto do Evento" class="mt-4 rounded-lg">
        <p class="mt-4">{{ evento.descricao }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePhotosStore } from '~/stores/photos';

const photosStore = usePhotosStore();
const eventos = photosStore.fotos;
</script>

<style scoped>
/* Estilos personalizados para a galeria */
</style>
