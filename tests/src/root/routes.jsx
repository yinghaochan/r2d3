import React from 'react'
import { Route, IndexRoute } from 'react-router'
import horzbarchart from './../horzBarChart/index.jsx'
import piechart from './../pie/index.jsx'

import App from './app.jsx'

module.exports = (
        <Route path="/" component={App}>
          <Route path="horzbarchart" component={horzbarchart} />
          <Route path="piechart" component={piechart} />
        </Route>
      )

