import React from 'react'
import HorzChart from './barChart.jsx'

const Chart = React.createClass({
  getInitialState(){
    return {
      data: [35, 15, 4, 20, 9, 3, 9,35, 15, 4, 20, 9, 3, 9,35, 15, 4, 20, 9, 3, 9],
      timer: null,
    }
  },
  changeData(){
    this.setState({
      data: this.state.data.map((item) => {
        return parseInt(Math.random()*100, 10)
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
      <HorzChart data={this.state.data} />
      )
  }
})

export default Chart
