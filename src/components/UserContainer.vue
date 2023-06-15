<template>
    <div class="userContainer">
        <div class="userContainer--form">
            <div class="userContainer--form-title">
                <h1>{{titulo}}</h1>
            </div>
            <form action="">
                <div>
                    <label for="username">Usuario: </label>
                    <input type="text" id="username">
                </div>
                <div>

                    <label for="password">Contraseña: </label>
                    <input type="password" id="password">
                </div>
                <div>
                </div>
            </form>
            <button type="submit" class="btn btn-warning" @click="addUser">{{button}}</button>
        </div>
    </div>
</template>

<script>    

    export default{
        name: 'user-component',
        props:{
            titulo: String,
            button: String
        },
        components:{
        },
        data(){
          return{
            user: [],
          }
        },
        methods:{
          addUser(){
            const username = document.querySelector('#username').value;
            const password = document.querySelector('#password').value;
            this.user.push({name: username, pass: password});
            console.log(this.user)
          }
        }
    };
</script>

<style scoped>
.userContainer{
    width: 100%;
    height: auto;
    padding: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
}

.userContainer--form{
    width: 400px;
    height: auto;
    padding: 15px;

    background-color: rgba(34, 34, 34, 0.788) ;
    border-radius: 10px;
    border: 2px solid black;
}

.userContainer--form form{
    width: 100%;
    padding: 10px;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    gap: 10px;

    color: white;
}

form div{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.userContainer--form-title{
    display: flex;
    justify-content: center;
    align-items: center;

    color: black;
}

button{
    font-weight: bold;
}

input{
    border-radius: 5px;
    border: none;
}

h1{
    font-family: 'Open Sans', sans-serif;
    font-size: 3vw;
    -webkit-text-stroke: 1.9px white;
    color: transparent;
}

</style>