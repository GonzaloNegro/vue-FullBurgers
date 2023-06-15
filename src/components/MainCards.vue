<template>
  <div class="card--tot">
    <div class="card--tit">
      <h1>{{ titulo }}</h1>
    </div>
    <div class="card-cont">
        <card-component v-for="(burger, index) of burgers" :key="index"
        :titulo="burger.titulo"
        :portada="burger.portada"
        :peso="burger.peso"
        :calorias="burger.calorias"
        :costo="burger.costo"
        class="cont-cards" >
        <p>Inicia sesión para realizar una compra</p>
      </card-component>
    </div>
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
          titulo: String
        },
        data(){
          return{
            
          }
        }
    };
</script>

<style scoped>
.card--tot{
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  gap: 40px;
}

.card--tit{
  display: flex;
  justify-content: center;
  padding: 15px;
}

h1{
    font-family: 'Open Sans', sans-serif;
    font-size: 3.5vw;
    -webkit-text-stroke: 2px white;
    color: transparent;
    text-align: center;
}

.card-cont{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 30px;
    flex-wrap: wrap;
}

</style>