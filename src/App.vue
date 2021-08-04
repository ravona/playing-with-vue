<template>
  <img class="logo" alt="ironSource logo" src="./assets/logo.svg">
  <h1 class="title">Vue.js app by Asaf Ravona</h1>
  <Nav/>
  <router-view></router-view>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  name: 'App',
  components: {
    Nav,
  }
}
</script>

<style lang="scss">
@import './style/style.scss';

#app {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 1rem;
}

.title {
  color: $color-primary;
}

.logo {
  width: 20vw;
}

</style>
