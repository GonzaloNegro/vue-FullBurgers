<template>
    <div>
        <div class="titulo-log">
            <router-link to="/registrarse"><button class="btn btn-outline-warning">Registrarse</button></router-link>
            <router-link to="/login"><button class="btn btn-outline-warning">Login</button></router-link>
        </div>
        <header-component :titulo="'¡Full Burgers!'" />
        <main-component :burgers="burgers" :titulo="'Nuestra selección'"/>
        <footer-component :subtitulo="'¡Full Burgers!'" />
        <router-link to="/cart"><button class="btnFltante btn btn-warning"><i class="fa-solid fa-cart-shopping"></i></button></router-link>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import MainCards from '../components/MainCards.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    'header-component': Header,
    'main-component': MainCards,
    'footer-component': Footer,
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
        },
        {
          id: 2,
          titulo: "Especial",
          costo: 2100.00,
          peso: 700,
          calorias: 280,
          portada: "https://punto33.com/wp-content/uploads/2022/12/Especial-33.jpg",
        },
        {
          id: 3,
          titulo: "Big",
          costo: 2000.00,
          peso: 800,
          calorias: 600,
          portada: "https://punto33.com/wp-content/uploads/2022/12/Big-33.jpg",
        },
        {
          id: 4,
          titulo: "Barbacoa",
          costo: 1800.00,
          peso: 700,
          calorias: 500,
          portada: "https://punto33.com/wp-content/uploads/2022/12/Barbacoa-33.jpg",
        },
        {
          id: 5,
          titulo: "Doble cheese",
          costo: 1750.00,
          peso: 500,
          calorias: 350,
          portada: "https://punto33.com/wp-content/uploads/2022/12/Doble-cheese.jpg",
        },
        {
          id: 6,
          titulo: "Doble cuarto",
          costo: 1850.00,
          peso: 600,
          calorias: 6500,
          portada: "https://punto33.com/wp-content/uploads/2022/12/cuartodelibra-1024x1024.png",
        },
        {
          id: 7,
          titulo: "Blue cheese",
          costo: 1900.00,
          peso: 700,
          calorias: 1000,
          portada: "https://punto33.com/wp-content/uploads/2022/12/bluecheese33-1024x1024.png",
        },
        {
          id: 8,
          titulo: "Ahumada",
          costo: 2000.00,
          peso: 600,
          calorias: 400,
          portada: "https://punto33.com/wp-content/uploads/2022/12/Mildis-Ahumada.jpg",
        }
      ]

    }
  }
}
</script>


<style scoped>
.titulo-log{
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    gap: 5px;
}

.btnFltante{
  position: fixed;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  line-height: 55px;
  border: 3px solid #FFC107;
  bottom: 30px;
  right: 30px;
}

.btnFltante:hover{
  background-color: #c99703;
}

.btnFltante i{
  color: black;
}
</style>