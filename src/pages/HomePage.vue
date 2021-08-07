<template>
  <h1>Home Page</h1>
  <button class="button" type="button">
    <router-link to="/charts">Charts</router-link>
  </button>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style lang="scss" scoped>
.button {
  margin: 0 auto;
}
</style>
