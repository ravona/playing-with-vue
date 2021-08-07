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
  name: "ChartsPage",
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
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: normal;
  transition: all 0.2s ease-in-out;

  &:hover {
    font-weight: bold;
    transition: all 0.2s ease-in-out;
  }

  @media only screen and (min-width: map-get($screen_sizes, $key: "desktop" )) {
    margin: 0 10px;
  }
}
</style>
