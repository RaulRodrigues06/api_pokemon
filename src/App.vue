<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/carateres">Carateres</router-link> |
      <router-link to="/signup">Registar</router-link> |
      <router-link to="/login">Iniciar sessão</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <br><br><br><br><br><br>
    <router-view/>
  </div>
</template>

<style>
body{
  margin: 0 0 0 0;
  background-image: url("https://i.pinimg.com/originals/6b/16/5c/6b165ca9760b6b29045b27b0f816b464.png");
  background-attachment: fixed;
  background-image: cover;
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

#nav {
  padding: 30px;
  position:fixed;
  width: 100%;
  background-color: aquamarine;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.background{
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://i.pinimg.com/originals/6b/16/5c/6b165ca9760b6b29045b27b0f816b464.png");
  background-size: 100%;
}
</style>
