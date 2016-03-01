import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import d3 from 'd3'
import _ from 'lodash'

import './style.scss'


const Chart = React.createClass({
  getInitialState: function() {
    return {
      windowWidth: 320    
    }
  },

  componentDidMount: function() {
    window.setTimeout(()=>this.handleResize(),100)
    window.addEventListener('resize', this.handleResize);
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  },  

  handleResize: function(e) {
    this.setState({windowWidth: window.innerWidth * 0.8});
  },
  
  render: function() {
    const data = this.props.data || []
    const width = this.state.windowWidth-20
    const barHeight = 21
    const margin = 30
    
    const x = d3.scale.linear()
                .domain([0, _.max(data)])
                .range([0, width])
    
    const colorScale = d3.scale.category20()
                         .domain(data)
    
    

                
    return (
      <svg 
        className="chart csstrans" 
        width={width} 
        height={barHeight * data.length}>
        <ReactCSSTransitionGroup
          transitionName="addBar" 
          component="g"
          transitionEnterTimeout={2000}
          transitionLeaveTimeout={3000}
          >
        {
          data.map((n, i) =>(
            <g 
              key={i} 
              transform={`translate(${margin},${barHeight*i})`}>
              <rect 
                fill={colorScale(n)} 
                width={x(n)} 
                height={barHeight-1}
               />
              <text 
                x={x(n)-10} 
                y="9.5" 
                dy=".35em"
              >
                {n}
              </text>
            </g>
          ))
        }
        </ReactCSSTransitionGroup>
      </svg>
    )
  }
})

export default Chart
