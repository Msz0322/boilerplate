import { configure, observable, action } from 'mobx'

import View from './modules/view'

configure({
  enforceActions: 'observed'
})

// 主状态
export class Store {
  view = new View(this) // 视图相关管理

  @observable networkConnection: boolean = navigator.onLine // 网络连接状态

  constructor() {
    // 监听网络链接状态
    window.ononline = action(() => (this.networkConnection = true))
    window.onoffline = action(() => (this.networkConnection = false))
  }
}

// 初始化并缓存全局状态，热更新友好
window.store = window.store || new Store()
const store = window.store as Store

export default store
