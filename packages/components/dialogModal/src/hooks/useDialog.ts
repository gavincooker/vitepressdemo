import { CSSProperties, SetupContext } from 'vue'
import { computed, getCurrentInstance, onMounted, ref, watch } from 'vue'
import { DialogEmits, DialogProps } from '../types/dialog-type'
export const useDialog = (props: DialogProps) => {
  const instance = getCurrentInstance()!
  const emit = instance.emit as SetupContext<DialogEmits>['emit']
  const visible = ref(false)
  function handleClose () {
    function hide (shouldCancel?: boolean) {
      if (shouldCancel) {
        return
      }
      close()
    }

    if (props.beforeClose) {
      props.beforeClose(hide)
    } else {
      close()
    }
  }

  function onModalClick () {
    if (props.onModalClickClose) {
      handleClose()
    }
  }

  function open () {
    visible.value = true
  }

  function close () {
    visible.value = false
  }

  const style = computed<CSSProperties>(() => {
    const style: CSSProperties = {}
    if (props.top) {
      style['margin-top'] = props.top
    }
    if (props.width) {
      style['width'] = props.width
    }
    return style
  })

  watch(
    () => props.modelValue,
    val => {
      if (val) {
        open()
        emit('open')
      } else {
        if (visible.value) {
          close()
        }
      }
    }
  )
  watch(visible, val => {
    if (val === false) {
      emit('update:modelValue', false)
    }
  })

  onMounted(() => {
    if (props.modelValue) {
      visible.value = true
      open()
    }
  })

  return {
    visible,
    style,
    handleClose,
    onModalClick
  }
}
export enum BUTTON_TYPE {
  CANCEL = 'Cancel Button',
  CONFIRM = 'Confirm Button'
}
