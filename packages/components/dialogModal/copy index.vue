<template>
  <overlay v-show="visible" :mask="modal" :overlay-class="modalClass">
    <div
      role="dialog"
      aria-model="true"
      class="overlayDialog"
      :class="`${ns.namespace.value}-overlay-dialog`"
      @click="onModalClick"
    >
      <dialog-content
        :custom-class="customClass"
        :center="center"
        :show-close="showClose"
        :title="title"
        @close="handleClose"
        ref="dialogContentRef"
      >
        <template #header>
          <slot v-if="!$slots.title" name="header" :close="handleClose"></slot>
          <slot v-else name="title"></slot>
        </template>
        <slot></slot>
        <template v-if="$slots.footer" #footer>
          <slot name="footer"></slot>
        </template>
        <template v-else #footer>
          <dialog-footer
            ref="defaultDialogFooter"
            :cancel-text="cancelText"
            :confirm-text="confirmText"
            :default-focus="defaultFocus"
            :focus-control="focusControl"
            :has-cancel="hasCancel"
            :has-confirm="hasConfirm"
            @close="handleClose"
            @cancel="$emit('cancel')"
            @confirm="$emit('confirm')"
          >
          </dialog-footer>
        </template>
      </dialog-content>
    </div>
  </overlay>
</template>
<script lang="ts" setup>
import { provide, ref } from 'vue'
import overlay from './components/overlay.vue'
import dialogContent from './components/dialog-content.vue'
import dialogFooter from './components/dialog-footer.vue'
import { useDialog } from './hooks/useDialog'
import { dialogInjectionKey } from './tokens'
import { useNamespace } from '@packages/hooks'
import { dialogProps } from './types/dialog-type'

const props = defineProps(dialogProps)
const { onModalClick, handleClose, style, visible } = useDialog(props)
const ns = useNamespace('dialogModal')
provide(dialogInjectionKey, {
  style,
  ns,
  visible
})
const dialogContentRef = ref()
const defaultDialogFooter = ref();
const KEYDOWN = (e: Event) => {
  defaultDialogFooter.value.KEYDOWN(e);
}
defineExpose({
  dialogContentRef,
  visible,
  KEYDOWN
})
</script>
<style lang="scss" scoped>
.overlayDialog {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
}
</style>
