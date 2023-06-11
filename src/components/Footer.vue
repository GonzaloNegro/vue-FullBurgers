<template>
  <div class="foot">
    <h2>{{subtitulo}}</h2>
  </div>
</template>

<script>
    export default{
        name: 'footer-component',
        props:{
          subtitulo: String,
        }
    }
</script>

<style scoped>
.foot{
    width: 100%;
    height: 200px;
    background: rgb(2,0,36);
    background: linear-gradient(360deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(62,38,15,0.7567401960784313) 100%);
    display: flex;
    justify-items: center;
    align-items: center;
}

.foot h2{
    width: 100%;
    font-family: 'Open Sans', sans-serif;
    font-size: 3.5vw;
    -webkit-text-stroke: 2.5px white;
    color: transparent;
    -webkit-transform: rotate(-5deg);
    text-align: center;
}
</style>