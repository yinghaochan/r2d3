import React from 'react'
import Pie from './pieChart.jsx'

const dataset = [
  { label: 'Abulia', count: 10 }, 
  { label: 'Betelgeuse', count: 70 },
  { label: 'Cantaloupe', count: 30 },
  { label: 'Dijkstra', count: 40 }
];

const Chart = React.createClass({
  getInitialState(){
    return {
      data: dataset,
      timer: null,
    }
  },
  changeData(){
    this.setState({
      data: this.state.data.map((item) => {
        return Object.assign({}, item, {count: parseInt(Math.random()*100, 10)})
      })
    })
  },
  componentDidMount(){
    this.setState({timer: window.setInterval(this.changeData, 3000)})
  },
  componentWillUnmount(){
    window.clearInterval(this.state.timer)
  },
  render(){
    return (
      <Pie data={this.state.data} />
      )
  }
})

export default Chart
