<template>
  <nav class="nav">
    <ul class="nav__menu">
      <li class="nav__item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/charts">Charts</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
    name: 'ChartsPage'
}
</script>

<style lang="scss" scoped>
    @import '../style/colors';

    .nav__menu {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .nav__item {
        font-size: 1.5rem;
    }
</style>