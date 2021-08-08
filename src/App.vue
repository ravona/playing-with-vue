<template>
  <Topbar />

  <router-view></router-view>
</template>

<script>
import Topbar from "./components/Topbar.vue";

export default {
  name: "App",
  components: {
    Topbar,
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
}
</style>
