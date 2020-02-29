<template>
  <v-app light>
    <img src="./assets/logo.png">
            <div>
            <router-link :to="{ name: 'Accueil'}">Accueil</router-link>
            <router-link :to="{ name: 'Login'}">Connexion</router-link>
            <a href="#" v-on:click="logout">Déconnexion</a>
        </div>
    <router-view/>
    <navigation v-if="['Accueil'].includes($route.name)">
      <v-toolbar fixed app light clipped-left color="primary" class="elevation-2">
    <v-toolbar-side-icon @click="drawer = !drawer" class="white--text"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">News Feed</v-toolbar-title>
  </v-toolbar>
  <v-content>
    <v-container fluid>
      <Accueil :articles="articles"></Accueil>
    </v-container>
   </v-content>
   <v-footer class="secondary" app>
<v-layout row wrap align-center>
        <v-flex xs12>
          <div class="white--text ml-3">
            Made with
            <v-icon class="red--text">favorite</v-icon>
            by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
            and <a class="white--text" href="https://github.com/rachidsakara" target="_blank">Rachid Sakara</a>
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
    </navigation>
  </v-app>
</template>

<script>
import router from './router'
import axios from 'axios'
import Accueil from './components/Accueil.vue'

export default {
  name: 'App',
  methods: {
    logout: function (e) {
      axios.get('/api/logout')
        .then(() => {
          router.push('/')
        })
    }
  },
  components: {
    Accueil
  },
  data () {
    return {
      drawer: false,
      api_key: 'c6d7b9f4cc6c41e5ae73883b49c1dfc9',
      articles: [],
      errors: []
    }
  },
  created () {
    axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.api_key)
      .then(response => {
        // this.articles = response.data.articles
        this.articles = response.data.articles
        console.log('data:')
        console.log(response.data.articles)
      })
      .catch(e => {
        this.errors.push(e)
      })
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
