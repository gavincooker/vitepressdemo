import { ComponentPublicInstance, ExtractPropTypes, PropType } from 'vue'
import { BUTTON_TYPE } from '../hooks/useDialog'

export const DialogExtraEmits = {
  close: () => true,
  cancel: () => true,
  confirm: () => true,
}
export const DialogExtraProps = {
  hasCancel: {
    type: Boolean,
    default: true
  },
  hasConfirm: {
    type: Boolean,
    default: true
  },
  cancelText: {
    type: String,
    default: 'cancel_btn'
  },
  confirmText: {
    type: String,
    default: 'confirm_btn'
  },
  defaultFocus: {
    type: String as PropType<BUTTON_TYPE>,
    default: BUTTON_TYPE.CANCEL
  },
  focusControl: {
    type: Boolean,
    default: true
  }
}
export type ExtraDialogPropsType = ExtractPropTypes<typeof DialogExtraProps>
export type ExtraDialogEmitsType = typeof DialogExtraEmits
