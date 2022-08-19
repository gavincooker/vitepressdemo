<template>
  <div :class="[ns.b(), customClass]" :style="style" @click.stop>
    <header :class="ns.e('header')">
      <slot name="header">
        <div>{{ title }}</div>
      </slot>
      <span v-if="showClose" class="closeIcon" @click="$emit('close')"
        >&nbsp;&nbsp;x&nbsp;&nbsp;</span
      >
    </header>
    <div :class="ns.e('body')">
      <slot></slot>
    </div>
    <footer v-if="$slots.footer" :class="ns.e('footer')">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script lang="ts" setup>
import { inject } from 'vue'
import {
  dialogContentEmits,
  dialogContentProps
} from '../types/dialog-content-type'
import { dialogInjectionKey } from '../tokens'

defineProps(dialogContentProps)
defineEmits(dialogContentEmits)
const { style, ns } = inject(dialogInjectionKey)!
</script>
<style lang="scss" scoped>
@import 'src/utils/bem/mixins.scss';
@import 'src/utils/bem/config.scss';

@include b(dialogModal) {
  position: relative;
  width: 50%;
  padding: 20px;
  margin: 15vh auto 50px;
  margin-top: 15vh;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
  background-color: #000;
  border: 1px solid #777;
  border-radius: 2px;
  box-sizing: border-box;
  @include e(header) {
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;
  }
  @include e(body) {
    margin-bottom: 20px;
  }
}
</style>
