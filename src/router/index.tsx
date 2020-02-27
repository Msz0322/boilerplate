import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// 主页
import Index from '../views/Index/Index'

import Show from '../views/Show/Show'

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/show" component={Show} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router
