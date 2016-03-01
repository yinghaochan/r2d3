import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './root/routes.jsx'
import { Router, browserHistory } from 'react-router'

ReactDOM.render(
  <Router routes={Routes} history={browserHistory} />,
  document.getElementById('root')
 )
