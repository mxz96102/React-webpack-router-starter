import React, { Component } from 'react'
import { hashHistory, Router } from 'react-router'
import routes from './router'


export default class App extends Component {
  render () {
    return <Router history={hashHistory} routes={routes} />
  }
}
