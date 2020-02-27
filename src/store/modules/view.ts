import { observable, action } from 'mobx'
import { Store } from '@/store'

export default class View {
  root: Store
  constructor(root) {
    this.root = root
  }

  @observable title: string = window.document.title // 页面标题
  @action setTitle = (title: string) => {
    window.document.title = this.title = title
  }

  @observable keys: any = {}
  @action setKey = (key: string, value: number) => {
    this.keys[key] = value
  }
}
