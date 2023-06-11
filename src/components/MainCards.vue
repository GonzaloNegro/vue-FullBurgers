<template>
  <div class="card-cont">
    <card-component v-for="(burger, index) of burgers" :key="index"
    :titulo="burger.titulo"
    :portada="burger.portada"
    :peso="burger.peso"
    :calorias="burger.calorias"
    :costo="burger.costo"
    :ingredientes="burger.ingredientes"
    class="cont-cards" >
      <p>Inicia sesión para realizar una compra</p>
    </card-component>
  </div>
</template>

<script>
import Card from './Card.vue';

    export default{
        name: 'main-component',
        components: {
          'card-component': Card
        },
        props: {
          burgers: Array,
        },
    };
</script>

<style scoped>
.card-cont{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 30px;
    flex-wrap: wrap;
}

</style>