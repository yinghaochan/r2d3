import React from 'react'
import Pie from './pieChart.jsx'

const dataset = [
  { label: 'Abulia', count: 10 }, 
  { label: 'Betelgeuse', count: 20 },
  { label: 'Cantaloupe', count: 30 },
  { label: 'Dijkstra', count: 40 }
];

const Chart = React.createClass({
  render(){
    return (
      <Pie data={dataset} />
      )
  }
})

export default Chart
