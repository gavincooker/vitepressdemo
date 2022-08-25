<template>
  <div @click="dialogModalShow = true" class="resetButton">
    show dialog modal
  </div>
  <dialog-modal v-model="dialogModalShow" ref="dialogModalRef" title="Tips" width="50%" :before-close="handleClose"
    @cancel="handleModalCancel" @confirm="handleModalConfirm" :has-cancel="true" :has-confirm="true"
    :cancel-text="'Cancel'" :confirm-text="'Ok'">
    <template #header>header tip text</template>
    <span>This is a message</span>
  </dialog-modal>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
const dialogModalShow = ref(false)
const dialogModalRef = ref()
const handleClose = (done: () => void) => {
  alert('dialog close')
  done()
}
const handleModalCancel = () => {
  alert('dialog cancel')
  dialogModalShow.value = false
}
const handleModalConfirm = () => {
  alert('dialog confirm')
  dialogModalShow.value = false
}
onMounted(() => {
  document.onkeydown = handleKeydown
})
onUnmounted(() => {
  document.onkeydown = null
})
const handleKeydown = (e: Event) => {
  console.log(e)
  if (e.key === 'ArrowRight') {
    e.action = 'Right'
  } else if (e.key === 'ArrowLeft') {
    e.action = 'Left'
  } else if (e.key === 'Enter') {
    e.action = 'Enter'
  } else if (e.key === 'Backspace') {
    e.action = 'Back'
  }
  dialogModalRef.value.KEYDOWN(e)
}
</script>
<style lang="scss" scoped>
.resetButton {
  width: fit-content;
  height: fit-content;
  font-size: 18px;
  background: green;
  color: aqua;
  border: 1px solid aqua;
  z-index: 1
}
</style>