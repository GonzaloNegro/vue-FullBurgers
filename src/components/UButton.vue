<template>
    <button class="btn btn-outline-warning">{{nombre}}</button>
</template>

<script>
    export default{
    name: 'button-component',
    props:{
        nombre: String,
    },
    methods: {
        handleClick(){
            this.$emit("contar")
        },
        handleClickLess(){
            this.$emit("contarLess")
        }
    }
}
</script>

<style scoped>

</style>