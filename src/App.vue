<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Customer msg="Welcome to Your Vue.js TV Market App"/>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Customer from './components/Customer.vue'
export default {
  name: 'App',
  components: {
    Customer,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
