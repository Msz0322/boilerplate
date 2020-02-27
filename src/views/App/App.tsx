import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import { hot } from 'react-hot-loader' // 热更新

import Store from '@/store'

import Router from '@/router/index'
import { isNodeEnvDev } from '@/utils/env';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Router />
      </Provider>
    )
  }
}

export default (isNodeEnvDev() ? hot(module)(App) : App)
