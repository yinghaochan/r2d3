import React from 'react'
import HorzChart from './barChart.jsx'

const Chart = React.createClass({
  render(){
    return (
      <HorzChart data={[35, 15, 4, 20, 9, 3, 9]} />
      )
  }
})

export default Chart
