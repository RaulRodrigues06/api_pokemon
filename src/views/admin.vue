<template>
    <div class="form">
        <h3>:: Venda ::</h3>
        <form @submit.prevent="submit">
            <span>Tipo: </span>
            <input type="name" v-model="name">
            <br><br>
            <span>Preço: </span>
            <input type="price" v-model="price">
            <br><br>
            <button type="submit">Enviar</button>
        </form>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return{
            name:'',
            price:''
        }
    },
    methods:{
        submit(){
            axios.put('',{
                email: this.email,
                password: this.password,
                returnSecureToken: true
            })
            .then(
                res => console.log(res)
            )
            .catch(
                res => console.log(res)
            )
        }
    }
}
</script>

<style>
.form{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>