<script>
/*eslint-disable*/
</script>
<template>
  <button
    v-on="$listeners"
    v-bind:type="type"
    :class="{ btn: true, 'btn--outlined': outlined }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button_main",
  props: {
    type: {
      type: String,
      default: "button",
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
.btn {
  display: inline-block;
  font-size: 18px;
  background: $main-color;
  color: #ffffff;
  cursor: pointer;
  min-width: 220px;
  border: 1px solid transparent;
  padding: 8px 15px;

  &--outlined {
    background: none;
    border: 1px solid $main-color;
    color: $main-color;
  }
}
</style>
