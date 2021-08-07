<template>
  <Header />
  <Nav />
  <router-view></router-view>
</template>

<script>
import Nav from "./components/Nav.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
    Nav,
  },
};
</script>

<style lang="scss">
@import "./style/style.scss";

#app {
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 1rem;
}
</style>
