<template>
  <button
    ref="_ref"
    :class="[active ? 'active': '']"
  >
      <slot />
  </button>
</template>
<script lang="ts" setup>
defineProps({
  active: Boolean,
})
</script>
<style lang="scss" scoped>
.active {
  background: aqua;
  color: white;
}
</style>