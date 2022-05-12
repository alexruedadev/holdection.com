<template>
  <custom-menu></custom-menu>
  <img alt="Vue logo" src="./assets/logo.png">
  <CoinMarket></CoinMarket>
</template>

<script>
import CoinMarket from './components/marketplace/CoinMarket.vue'
import CustomMenu from './components/navigation/CustomMenu.vue'

export default {
  name: 'App',
  components: {
    CoinMarket,
    CustomMenu
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
