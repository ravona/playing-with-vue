<template>
  <Header title="Home Page" subtitle="There's no place like home" />
  <main class="main">
    <h3>
      Check out charts page to find out which countries are the top 10 Avocado
      producers in the world!
    </h3>
    <img
      class="Featured"
      alt="dancing avocado gif"
      src="../assets/avocado.gif"
    />
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
.Featured {
  height: 180px;
}

.button {
  margin: 0 auto;
}
</style>
