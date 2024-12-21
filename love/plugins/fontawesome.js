import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCalendarDays, faTrash, faBook, faHouse } from '@fortawesome/free-solid-svg-icons'; // Aqui você importa os ícones desejados

// Adiciona os ícones à biblioteca
library.add(faCalendarDays, faTrash, faBook, faHouse);

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon);
});
