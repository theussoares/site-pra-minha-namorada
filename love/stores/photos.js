import { defineStore } from 'pinia';

export const usePhotosStore = defineStore('photos', {
  state: () => ({
    fotos: [
      { url: '14dez24', data: '14 de Dezebro de 2024', descricao: 'Sua formatura, foi muito legal, e um momento muito especial para você e foi muito bom fazer parte disso.' },
      { url: '21out24', data: '21 de Outubro de 2024', descricao: 'Um dia que comemoramos mais um mês de namoro comendo pizza e assistindo kkkk, mais um dia aleatório, provavelmente a gente tinha esquecido que era dia 21.' },
      { url: '11out24', data: '11 de Outubro de 2024', descricao: 'Mais um cinema, Deadpool, eu queria muito ver esse filme e você foi comigo sem nem cogitar, e no fim você também gostou mesmo sem entender algumas partes, e ainda tinha uma menina de uma série que você viu.'},
      { url: '04out24', data: '04 de Outubro de 2024', descricao: "Mais um jantar no Tom's, que é seu lugar favorito para comer lanche e nosso primeiro encontro foi ali em."},
      { url: '18ago24', data: '18 de Agosto de 2024', descricao: 'O dia que fomos no show do morada e foi muito bom e super legal, e você estava linda como sempre.'},
      { url: '06jun24', data: '06 de Junho de 2024', descricao: 'Simplesmente seu aniversario, que ficou muito bonito e foi você que planejou e ajudou a fazer, foi muito legal você estava bem feliz e maravilhosa nesse dia.'},
      { url: '01jan24', data: '01 de Janeiro de 2024', descricao: 'Primeira virada de ano que passamos juntos, primeira vez que você usa esse vestido azul que fica lindo em você'},
      { url: '21dez23', data: '21 de Dezembro de 2023', descricao: 'O di- A semana que eu te enganei kkk, e consegui fazer um pedido de namoro na pizzaria, você estava linda, com as unhas feitas e de totalmente beijavel, eu sei que a gente ja estava junto antes disso mas poder te namorar e beijar sem restrições foi muito bom, finalmente dizer É A MINHA NAMORADA, foi muito bom.'},
      { url: '02dez23', data: '02 de Dezembro de 2023', descricao: 'Estavamos na reunião dos jovens e depois passamos na praça, e tiramos varias fotos e essa é uma das minhas favoritas desse dia (e olha que tem muita foto boa nesse dia em) mas enfim, eu estava feliz, porque você estava me amando nesse dia kkk.'},
      { url: '07set23', data: '07 de Setembro de 2023', descricao: 'Esse dia saimos com a bia, o joão, e os dois amigos dele, pro cinema, e você causou inveja na bia porque eu estava fazendo carinho na sua perna kkk, e sem contar essa foto ótima que a gente tirou.'},
      { url: '31ago23', data: '31 de Agosto de 2023', descricao: 'Segunda vez que você viu minha mãe e minha tia, já que a primeira vez que eu te levei la a gente não tirou foto né. E nesse dia teve aquele video no meio da rua kkkk.'},
      { url: '21ago23', data: '21 de Agosto de 2023', descricao: 'Passei raiva em, acampamneto de jovens que tinha muita gente chata, a gente se estranhou um pouco também, mas no final deu tudo certo.'},
      { url: '21jul23', data: '21 de Julho de 2023', descricao: 'Primeira vez que você foi em um parque de diversões, e foi muito legal, também andamos na roda gigante, no crazy dance e no samba.'},
      { url: '09jun23', data: '09 de Junho de 2023', descricao: 'De tarde fomos na lagoa ficar juntos e conversar, e de noite para o Pg juntos foi muito legal.'},
      { url: '01jun23', data: '01 de Junho de 2023', descricao: 'Primeiro encontro que tivemos, saimos para ir ao cinema juntos (e a manu kkkkk) e foi muito bom, você deitou no meu colo pra assistir o filme e se apaixou pelo meu braço kkk, e a gente foi combinando ainda.'},
      { url: '27maio23', data: '27 de Maio de 2023', descricao: 'Um dia antes do nosso primeiro beijo, você dormiu em casa, e a gente se declarou, ok derramei uma lagrima escrevendo isso, foi a primeira vez que falamos de sentimento um para o outro e vimos que era recíproco e no outro dia nos beijamos pela primeira vez.'}
      // Mais fotos
    ]
  }),
});
