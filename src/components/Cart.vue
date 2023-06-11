<template>
    <button class="btnFltante"><i class="fa-solid fa-cart-shopping"></i></button>
</template>

<script>    
    export default{
        name: 'cart-component',
        props:{
            titulo: String,
        },
    };
</script>

<style scoped>
.btnFltante{
    position: fixed;
    width: 55px;
    height: 55px;
    border-radius: 50px;
    line-height: 55px;
    bottom: 30px;
    right: 30px;
}

.btnFltante i{
    color: green;
}
</style>