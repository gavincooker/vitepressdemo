import { App } from 'vue'

import IButton from './components/button'
import { showButton } from './components/activeButton/index'
import { dialogModal } from './components/dialogModal'

const components = { IButton, showButton, dialogModal }
/**
 * 组件注册
 * @param {App} app Vue 对象
 * @returns {Void}
 */
const install = function (app: App) {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value)
  })
}

export { IButton }

export default {
  install,
  ...components
}
