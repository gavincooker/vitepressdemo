import { useNamespace } from 'docs/src/hooks'
import { CSSProperties, ComputedRef, InjectionKey, PropType, Ref } from 'vue'
export type DialogContext = {
  style: ComputedRef<CSSProperties>
  ns: ReturnType<typeof useNamespace>
  visible: Ref<Boolean>
}

export const dialogInjectionKey: InjectionKey<DialogContext> = Symbol(
  'dialogInjectionKey'
)
export const definePropType = <T>(val: any): PropType<T> => val
