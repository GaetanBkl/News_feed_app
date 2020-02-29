<template>
    <div>
        <h2>Identifiez-vous</h2>
        <form v-on:submit="login">
            <input type="text" name="email" class="inp"/><br>
            <input type="password" name="password" class="inp"/><br>
            <input type="submit" value="Login" class="inp"/>
        </form>
    </div>
</template>

<script>
import router from '../router'
import axios from 'axios'
export default {
  name: 'Login',
  methods: {
    login: (e) => {
      e.preventDefault()
      let email = e.target.elements.email.value
      let password = e.target.elements.password.value
      let login = () => {
        let data = {
          email: email,
          password: password
        }
        axios.post('/api/login', data)
          .then((response) => {
            console.log('Logged in')
            router.push('/accueil')
          })
          .catch((errors) => {
            console.log('Cannot log in')
          })
      }
      login()
    }
  }
}
</script>

<style>
.inp {
  border-style: solid;
  border-color: #80808059;
  margin-bottom: 10px;
  box-shadow: 0px 2px 3px 0px;
  background-color: rgb(250, 255, 255);
}

</style>
