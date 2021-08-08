<template>
  <div class="Topbar">
    <div class="Topbar__brand">
      <img class="Topbar__logo" alt="company-logo" src="../assets/logo.svg" />
      <h1 class="Topbar__title">Vue.js demo app</h1>
      <h2 class="Topbar__subtitle">By Asaf Ravona</h2>
    </div>

    <div class="Topbar__nav">
      <Nav />
    </div>
  </div>
</template>

<script>
import Nav from "./Nav.vue";

export default {
  name: "Topbar",
  components: { Nav },
};
</script>

<style lang="scss" scoped>
@import "../style/global";
@import "../style/colors";

.Topbar {
  background-color: $color-dark-knight;
  padding: 1rem 2rem;

  @media only screen and (min-width: map-get($screen_sizes, $key: "desktop" )) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__brand {
    @media only screen and (min-width: map-get($screen_sizes, $key: "desktop" )) {
      display: flex;
      align-items: center;
    }
  }

  &__logo {
    height: 40px;
    margin-bottom: 1rem;

    @media only screen and (min-width: map-get($screen_sizes, $key: "desktop" )) {
      justify-self: flex-start;
      margin-bottom: 0;
      margin-right: 1rem;
    }
  }

  &__title {
    font-size: 1.25rem;
    color: $color-light;
    margin-bottom: 0.5rem;
    @media only screen and (min-width: map-get($screen_sizes, $key: "desktop" )) {
      margin-bottom: 0;
      padding-right: 5px;
    }
  }

  &__subtitle {
    font-size: 1rem;
    font-weight: normal;

    @media only screen and (min-width: map-get($screen_sizes, $key: "desktop" )) {
      &::before {
        content: "|";
        padding-right: 5px;
      }
    }
  }

  &__nav {
    @media only screen and (min-width: map-get($screen_sizes, $key: "desktop" )) {
    }
  }
}
</style>
