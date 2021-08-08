<template>
  <header class="Header">
    <h4 class="Header__title">{{ title }}</h4>
    <h5 class="Header__subtitle">{{ subtitle }}</h5>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      required: true,
      default: "Page Title",
    },
    subtitle: {
      type: String,
      default: "Check this out!",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/global";
@import "../style/colors";

.Header {
  margin-bottom: 1rem;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(14, 174, 87, 1) 0%,
    rgba(12, 116, 117, 1) 90%
  );

  &__title {
    font-size: 1.618rem;
    margin-bottom: 1rem;
  }

  &__subtitle {
    text-transform: uppercase;
  }
}
</style>
