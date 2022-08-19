import { dialogContentProps } from './dialog-content-type'
import { ExtractPropTypes } from 'vue'
import { definePropType } from '../tokens'
import { DialogExtraEmits, DialogExtraProps } from './dialog-extra-type'

export const dialogProps = {
  ...dialogContentProps,
  ...DialogExtraProps,
  modelValue: {
    type: Boolean,
    default: false
  },
  beforeClose: {
    type: definePropType<DialogBeforeCloseFn>(Function)
  },
  onModalClickClose: {
    type: Boolean,
    default: true
  },
  modal: {
    type: Boolean,
    default: true
  },
  modalClass: String,
  top: {
    type: String
  },
  width: {
    type: [String, Number]
  }
}
export type DialogProps = ExtractPropTypes<typeof dialogProps>

export const dialogEmits = {
  ...DialogExtraEmits,
  open: () => true,
  ['update:modelValue']: (value: boolean) => value,
  close: () => true
}
export type DialogEmits = typeof dialogEmits

type DoneFn = (cancel?: boolean) => void
export type DialogBeforeCloseFn = (done: DoneFn) => void
