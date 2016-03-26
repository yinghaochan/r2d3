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
    const data = this.props.data || null
    const width = 600
    const height = 600
    const margin = 100
    const radius = Math.min(width, height) / 2 - margin
    
    const colorScale = d3.scale.category20b()
    
    const pie = d3.layout.pie().value((d) => d.count)(data)
    const arc = d3.svg.arc().outerRadius(radius)

    console.log(arc(pie[0]))    


                
    return (
      <svg 
        className="chart " 
        width={width} 
        height={height}>

          <g transform={`translate(${margin + width/2},${height/2})`}>
            {
              pie.map((slice, i) => {
                return <path key={i} d={arc(slice)} fill={colorScale(slice.data.label)} />
              })
            }
            
          </g>

      </svg>
    )
  }
})

export default Chart
