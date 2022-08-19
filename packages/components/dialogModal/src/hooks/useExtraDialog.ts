import {
  computed,
  getCurrentInstance,
  inject,
  ref,
  SetupContext,
  watch
} from 'vue'
import { BUTTON_TYPE } from './useDialog'
import {
  ExtraDialogPropsType,
  ExtraDialogEmitsType
} from '../types/dialog-extra-type'
import { dialogInjectionKey } from '../tokens'
export const useExtraDialog = (props: ExtraDialogPropsType) => {
  const activeButton = ref(BUTTON_TYPE.CANCEL)
  const instance = getCurrentInstance()!
  const emit = instance.emit as SetupContext<ExtraDialogEmitsType>['emit']
  const { visible } = inject(dialogInjectionKey)!
  if (props.focusControl) {
    watch(visible, val => {
      if (val) {
        setInitActiveButton()
      }
    })
  }
  const isCancelButton = computed(
    () => activeButton.value === BUTTON_TYPE.CANCEL
  )
  const isConfirmButton = computed(
    () => activeButton.value === BUTTON_TYPE.CONFIRM
  )
  const setInitActiveButton = () => {
    if (props.hasCancel && props.hasConfirm) {
      setActiveButton(props.defaultFocus)
    } else if (props.hasCancel) {
      setActiveButton(BUTTON_TYPE.CANCEL)
    } else if (props.hasConfirm) {
      setActiveButton(BUTTON_TYPE.CONFIRM)
    }
  }
  const setActiveButton = (type: BUTTON_TYPE) => {
    activeButton.value = type
  }

  const handleClickCancel = () => {
    setActiveButton(BUTTON_TYPE.CANCEL)
    ENTER()
  }
  const handleClickConfirm = () => {
    setActiveButton(BUTTON_TYPE.CONFIRM)
    ENTER()
  }

  const LEFT = () => {
    if (props.hasCancel) {
      setActiveButton(BUTTON_TYPE.CANCEL)
    }
  }
  const RIGHT = () => {
    if (props.hasConfirm) {
      setActiveButton(BUTTON_TYPE.CONFIRM)
    }
  }
  const ENTER = () => {
    if (isCancelButton.value) {
      emit('cancel')
    } else if (isConfirmButton.value) {
      emit('confirm')
    }
  }
  const BACK = () => {
    emit('close')
  }
  const EXIT = BACK
  const handleActions = <{ [key: string]: () => void }>{
    LEFT,
    RIGHT,
    ENTER,
    BACK,
    EXIT
  }
  const KEYDOWN = (event: { action: string }) => {
    const action = (event.action || '').toUpperCase()
    if (props.focusControl) {
      handleActions[action]?.()
    }
  }
  return {
    isCancelButton,
    isConfirmButton,
    KEYDOWN,
    handleClickCancel,
    handleClickConfirm
  }
}
