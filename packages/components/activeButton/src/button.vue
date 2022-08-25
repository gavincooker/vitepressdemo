<template>
  <button ref="_ref" :class="[active ? 'active' : '']">
    <slot />
  </button>
</template>
<script lang="ts" setup>
defineProps({
  active: Boolean,
})
</script>
<style lang="scss" scoped>
button {
  border-radius: 2px;
  border: 1px solid #777;
  min-width: 100px;
  &.active {
    background: aqua;
    color: #000;
  }
  & + button {
    margin-left: 20px;
  }
}

</style>