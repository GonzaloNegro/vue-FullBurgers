<template>
  <div class="card">
    <div class="img-bur">
      <img class="" :src="portada" :title="titulo">
    </div>
      <br><br>
      <p class="tittle">{{ titulo }}</p>
      <table>
        <tr>
          <td>Peso</td>
          <td>{{peso}}gr</td>
        </tr>
        <tr>
          <td>Calorias</td>
          <td>{{calorias}}Kcal</td>
        </tr>
      </table>
      <!-- <p class="infor">Precio: {{ costo | price("$")}}</p> -->
      <p class="infor">Precio: ${{ costo }}</p>
      <slot></slot>
      <!-- <card-count @contar="buttonClickIncrease" @contarLess="buttonClickDecrease"  :contador="contador" /> -->
      <!-- <button class="btn btn-warning" @click="addtoCart">Agregar al carrito</button> -->
  </div>
</template>

<script>
import Count from './Count.vue';

    export default{
        name: 'card-component',
        components: {
          'card-count': Count
        },
        data(){
          return{
            contador : 0,
            cart: [],
          }
        },
        props:{
            titulo: String,
            portada: String,
            peso: Number,
            calorias: Number,
            costo: Number,
            ingredientes: String
        },
        methods:{
          buttonClickIncrease(){
            this.contador ++
        },
        buttonClickDecrease(){
            if(this.contador == 0){
                alert("No puede seguir restando.")
            }else{
                this.contador --
            }
        },
/*           addtoCart(){
            this.cart.push("Hola2");
            console.log(this.cart[0])
          } */
        },
    };
</script>

<style scoped>
.img-bur {
    width: 270px;
    height: 200px;
    overflow: hidden;
    position: relative;
    display: inline-block;
    text-align: center;
}
.img-bur img {
    width: 100%;
    height: 100%;
    transition: 0.5s;
    object-fit: cover;
}

.img-bur img:hover{
    transform: scale(1.2);
    filter: grayscale(1);
/*     filter: blur(5px); */
}
.card {
    text-align: center;
    min-width: 280px;
    padding: 10px 5px;
    margin: 10px 10px;
    font-size: large;
    color:rgb(155, 155, 155);
    border-style: solid;
    border-width: 1px;
    max-width: 220px;
    background-color: rgba(34, 34, 34, 0.788) ;
    transition: 0.7s;
}
.card:hover {
    box-shadow: 0 6px 10px 0 rgba(0,0,0,0.2);
  }
table{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

tr{
    width: 100%;
    display: flex;
    justify-content: space-around;
    gap: 20px;
}

td{
    padding: 5px;
    width: 100%;
    text-align: left;
}
.tittle{
    font-family: 'Open Sans', sans-serif;
    font-size: 2vw;
    -webkit-text-stroke: 1.5px white;
    color: transparent;
}

.infor{
    padding: 5px;
    color: white;
    font-size: 1.5rem;
    display: flex;
    justify-content: flex-start;
}

button{
  padding: 5px;
  margin-top: 15px;
}
</style>