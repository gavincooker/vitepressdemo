<template>
  <div
    @click="dialogModalShow = true"
    style="position: fixed; top: 100px; left: 100px; width: 50px; height: 50px; font-size: 18px; background: white;border: 1px solid aqua;"
  >
    reset
  </div>
  <dialog-modal
    v-model="dialogModalShow"
    ref="dialogModalRef"
    title="Tips"
    width="50%"
    :before-close="handleClose"
    @cancel="handleModalCancel"
    @confirm="handleModalConfirm"
    :has-cancel="true"
    :has-confirm="true"
  >
    <template #header>header tip text</template>
    <span>This is a message</span>
  </dialog-modal>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
const dialogModalShow = ref(false)
const dialogModalRef = ref()
const handleClose = (done: () => void) => {
  done()
}
const handleModalCancel = () => {
  console.log('dialog cancel')
  dialogModalShow.value = false
}
const handleModalConfirm = () => {
  console.log('dialog confirm')
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