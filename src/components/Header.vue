<template>
    <div class="titulo">
        <div class="titulo-log">
            <button-component :nombre="'Registrarse'" />
            <button-component :nombre="'Login'" />
        </div>
        <div class="titulo-img">
            <img class="" src="../assets/burger.png">
            <h1>{{titulo}}</h1>
            <img class="" src="../assets/espatula.png">
        </div>
    </div>
</template>

<script>
import Button from './UButton.vue';

    export default{
        name: 'header-component',
        props:{
            titulo: String,
        },
        components: {
          'button-component': Button,
        },
    };
</script>

<style scoped>
.titulo{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(42,26,11,0.43461134453781514) 100%);
}

.titulo-img{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

.titulo-log{
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    gap: 5px;
}

.titulo img{
    width: 100px;
    filter: invert(0.7) saturate(1000%);
}

h1{
    font-family: 'Open Sans', sans-serif;
    font-size: 6vw;
    -webkit-text-stroke: 1.5px white;
    color: transparent;
    text-align: center;
    -webkit-transform: rotate(-5deg);   
    margin:40px;
}
</style>