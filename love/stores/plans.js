import { defineStore } from 'pinia';

export const usePlansStore = defineStore('plans', {
  state: () => ({
    planos: [] // Inicialmente a lista está vazia
  }),

  actions: {
    // Método para carregar os planos do cookie
    carregarPlanos() {
      const planosSalvos = this.getCookie('planos'); // Tenta obter o cookie com os planos
      if (planosSalvos) {
        try {
          this.planos = JSON.parse(planosSalvos); // Converte de volta para um array
        } catch (e) {
          console.error("Erro ao carregar planos do cookie:", e);
        }
      }
    },

    // Método para salvar os planos no cookie
    salvarPlanos() {
      try {
        // Certifique-se de definir um caminho e uma expiração para o cookie
        const expires = new Date();
        expires.setFullYear(expires.getFullYear() + 2); // Validade de 2 anos
        document.cookie = `planos=${JSON.stringify(this.planos)}; expires=${expires.toUTCString()}; path=/;`;
      } catch (e) {
        console.error("Erro ao salvar planos no cookie:", e);
      }
    },

    // Adicionar plano
    addPlano(plano) {
      this.planos.push(plano);
      this.salvarPlanos(); // Salva os planos sempre que adicionar um novo
    },

    // Remover plano
    removePlano(index) {
      this.planos.splice(index, 1);
      this.salvarPlanos(); // Salva os planos sempre que um for removido
    },

    // Função para obter um cookie
    getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
      return null;
    }
  }
});
