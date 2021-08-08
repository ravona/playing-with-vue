<template>
  <button type="button" @click="$emit('cbFunc')">
    {{ text }}</button
  >`
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
