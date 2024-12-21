<template>
  <div class="pt-8 pb-2 px-6 flex flex-col items-center gap-2 h-screen">
    <h2 class="text-3xl text-center font-semibold mb-6">Nossos Planos</h2>

    <!-- Formulário para adicionar plano -->
    <form @submit.prevent="adicionarPlano" class="w-full flex flex-col gap-2 justify-center items-center">
        <input 
          v-model="novoPlano" 
          type="text" 
          class="max-w-[460px] w-full p-4 border-b outline-none border-pink-500" 
          placeholder="Adicionar novo plano..."
        />
        <button 
          type="submit" 
          class="max-w-[460px] w-full py-2 bg-pink-500 text-white rounded-lg"
        >
          Adicionar Plano
        </button>
    </form>

    <!-- Lista de planos -->
    <div class="py-4 max-w-[460px] w-full flex flex-col gap-2 overflow-y-scroll px-2 max-h-[390px]">
      <!-- Exibe a lista de planos quando houver planos -->
      <div v-if="planos.length > 0" v-for="(plano, index) in planos" :key="index" class="flex justify-between bg-white p-4 rounded-lg shadow-md shadow-pink-500">
        <p>{{ plano }}</p>
        <!-- Botão de exclusão -->
        <button 
          @click="removerPlano(index)" 
          class="text-pink-500 hover:text-red-700 ml-4 font-bold"
        >
          <FontAwesomeIcon icon="trash" />
        </button>
      </div>

      <!-- Mensagem caso não haja planos -->
      <div v-else>
        <h2 class="text-center font-semibold text-pink-500">Adicione os planos que você deseja para nossa vida.</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { usePlansStore } from '~/stores/plans';

const plansStore = usePlansStore();
const planos = computed(() => plansStore.planos);
const novoPlano = ref('');

// Carregar os planos do cookie ao iniciar
onMounted(() => {
  plansStore.carregarPlanos();
});

// Função para adicionar um plano
const adicionarPlano = () => {
  if (novoPlano.value) {
    plansStore.addPlano(novoPlano.value);
    novoPlano.value = ''; // Limpa o campo após adicionar
  }
};

// Função para remover um plano
const removerPlano = (index) => {
  plansStore.removePlano(index);
};
</script>
