<template>
  <div id="app">
    <header-component :titulo="'¡Full Burgers!'" />
    <main-component :burgers="burgers"></main-component>
    <footer-component :subtitulo="'¡Full Burgers!'"></footer-component>
    <cart-component />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import MainCards from './components/MainCards.vue';
import Footer from './components/Footer.vue';
import Cart from './components/Cart.vue';

export default {
  name: 'App',
  components: {
    'header-component': Header,
    'main-component': MainCards,
    'footer-component': Footer,
    'cart-component': Cart
  },
  data() {
    return {
      burgers: [
        {
          id: 1,
          titulo: "Bomba",
          costo: 2100.00,
          peso: 700,
          calorias: 200,
          portada: "https://punto33.com/wp-content/uploads/2022/12/Bomba-33.jpg",
          ingredientes: "INGREDIENTES QUE VA A LLEVAR LA HAMBURGUESA"
        },
        {
          id: 2,
          titulo: "Especial",
          costo: 2100.00,
          peso: 700,
          calorias: 280,
          portada: "https://punto33.com/wp-content/uploads/2022/12/Especial-33.jpg",
          ingredientes: "INGREDIENTES QUE VA A LLEVAR LA HAMBURGUESA"
        },
        {
          id: 3,
          titulo: "Big",
          costo: 2000.00,
          peso: 800,
          calorias: 600,
          portada: "https://punto33.com/wp-content/uploads/2022/12/Big-33.jpg",
          ingredientes: "INGREDIENTES QUE VA A LLEVAR LA HAMBURGUESA"
        },
        {
          id: 4,
          titulo: "Barbacoa",
          costo: 1800.00,
          peso: 700,
          calorias: 500,
          portada: "https://punto33.com/wp-content/uploads/2022/12/Barbacoa-33.jpg",
          ingredientes: "INGREDIENTES QUE VA A LLEVAR LA HAMBURGUESA"
        },
        {
          id: 5,
          titulo: "Doble cheese",
          costo: 1750.00,
          peso: 500,
          calorias: 350,
          portada: "https://punto33.com/wp-content/uploads/2022/12/Doble-cheese.jpg",
          ingredientes: "INGREDIENTES QUE VA A LLEVAR LA HAMBURGUESA"
        },
        {
          id: 6,
          titulo: "Doble cuarto",
          costo: 1850.00,
          peso: 600,
          calorias: 6500,
          portada: "https://punto33.com/wp-content/uploads/2022/12/cuartodelibra-1024x1024.png",
          ingredientes: "INGREDIENTES QUE VA A LLEVAR LA HAMBURGUESA"
        },
        {
          id: 7,
          titulo: "Blue cheese",
          costo: 1900.00,
          peso: 700,
          calorias: 1000,
          portada: "https://punto33.com/wp-content/uploads/2022/12/bluecheese33-1024x1024.png",
          ingredientes: "INGREDIENTES QUE VA A LLEVAR LA HAMBURGUESA"
        },
        {
          id: 8,
          titulo: "Ahumada",
          costo: 2000.00,
          peso: 600,
          calorias: 400,
          portada: "https://punto33.com/wp-content/uploads/2022/12/Mildis-Ahumada.jpg",
          ingredientes: "INGREDIENTES QUE VA A LLEVAR LA HAMBURGUESA"
        }
      ]

    }
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:700);

#app {
/*   font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
body{
  margin: 0;
    padding: 0;
    background-color: #f2f4f5;
    color: white;
    font-family: 'Montserrat', sans-serif;
    height: 100vh;

    background-image: url(./assets/burger.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}
</style>
