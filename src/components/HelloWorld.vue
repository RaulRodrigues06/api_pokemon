<template>
    <div class="hello">
      <!-- <input type="text" v-model="pesquisa">
      <button @click="carregaInfo(pesquisa)">Pesquisar</button> -->
      <h1>{{ msg }}</h1>
      <!-- <div v-if="!!resultados"> -->
        <!-- <div>{{resultados.name}}</div>
        <div>{{resultados.species}}</div>
        <div>{{resultados.sprites}}</div>
        <img :src="resultados.sprites.front_default" alt=""> -->
        <div v-for="(item, index) in resultados" :key="index">
          <!-- <h3>{{item.data[0].title}}</h3>
          <img :src="item.links[0].href" alt="">
          <p>{{item.data[0].description}}</p> -->
          <p>{{item.name}}</p>
          <!-- <p>{{item.species}}</p> -->
          <img :src="item.sprites" alt="">
        </div>
      <!-- </div> -->
    </div> 
  
</template>

<script>
import axios from "axios"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      resultados:"",
      pesquisa:""
    }
  },
  methods:{
    carregaInfo(){
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
        .then(res=>{
            this.resultados= res.data.results;
            console.log(res)
          }
        )
    }
  },
  mounted(){
    this.carregaInfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
