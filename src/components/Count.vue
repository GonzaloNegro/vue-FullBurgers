<template>
    <div class="boton">
        <button v-on:click="restando" value="Click" class="menos"><i class="fa-solid fa-minus fa-2x"></i></button>
        <p>{{ numero }}</p>
        <button v-on:click="sumando" value="Click" class="mas"><i class="fa-solid fa-plus fa-2x"></i></button>
    </div>
</template>

<script>
    export default{
        name: 'card-count',
        props:{
        },
        data(){
        return{
            numero : 0,
        }
    },
        methods: {
        sumando(){
            this.numero ++
        },
        restando(){
            if(this.numero == 0){
                alert("No puede seguir restando.")
            }else{
                this.numero --
            }
        }
    }
    }
</script>

<style scoped>
.mas{
    color: white;
    border-radius: 30px;
    border: none;
    background-color: rgb(18, 121, 18);
}
.menos{
    color: white;
    border-radius: 30px;
    border: none;
    background-color: rgb(184, 17, 17);
}

.boton{
    width: 100%;
    display: flex;
    justify-content: space-around;
}

.mas:active{
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    background-color: rgb(15, 100, 15);
}
.menos:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
}
</style>