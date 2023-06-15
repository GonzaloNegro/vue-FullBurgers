<template>
    <div class="log">
        <div class="titulo-log">
            <router-link to="/"><button class="btn btn-outline-warning">Home</button></router-link>
        </div>
        <header-component :titulo="'¡Full Burgers!'" />
        <user-component :titulo="'Login'" :button="'Ingresar'" ></user-component>
        <footer-component :subtitulo="'¡Full Burgers!'"></footer-component>
    </div>
</template>


<script>
import Header from '../components/Header.vue';
import Form from '../components/UserContainer.vue';
import Footer from '../components/Footer.vue';


export default {
  components: {
    'header-component': Header,
    'footer-component': Footer,
    'user-component': Form,
  },
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
</style>