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
  name: "Nav",
};
</script>

<style lang="scss" scoped>
@import "../style/global";
@import "../style/colors";

.nav__menu {
  list-style: none;
  padding: 0;
  margin: 0;

  @media only screen and (min-width: map-get($screen_sizes, $key: "desktop" )) {
    display: flex;
    justify-content: center;
  }
}

.nav__item {
  font-size: 1.25rem;
  margin: 2rem 0;
  border: 2px solid $color-primary;

  @media only screen and (min-width: map-get($screen_sizes, $key: "desktop" )) {
    margin: 0 0.5rem;
  }

  a {
    padding: 5px 12px;
    line-height: 1.5;
    text-transform: uppercase;
  }
}
</style>
