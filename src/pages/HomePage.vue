<template>
  <Header title="Home Page" subtitle="There's no place like home" />
  <main class="main">
    <p>Check out "charts" page</p>
  </main>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "HomePage",
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
.button {
  margin: 0 auto;
}
</style>
