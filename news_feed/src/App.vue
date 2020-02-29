<template>
  <div id="app">
    <img src="./assets/logo.png">
            <div>
            <router-link :to="{ name: 'Accueil'}">Accueil</router-link>
            <router-link :to="{ name: 'Login'}">Connexion</router-link>
            <a href="#" v-on:click="logout">Déconnexion</a>
        </div>
    <router-view/>
  </div>
</template>

<script>
import router from './router'
import axios from 'axios'
export default {
  name: 'App',
  methods: {
    logout: function (e) {
      axios.get('/api/logout')
        .then(() => {
          router.push('/')
        })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
