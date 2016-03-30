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
    const radius = Math.min(width, height) / 4
    
    const colorScale = d3.scale.category20()
    
    const pie = d3.layout.pie().value((d) => d.count).sort((a,b) => d3.descending(a.count, b.count))(data)
    const arc = d3.svg.arc().outerRadius(radius).innerRadius(radius/1.5).padAngle(0.02)

                
    return (
      <svg 
        className="chart" 
        width={width} 
        height={height}>
        <g key="2" transform={`translate(${margin + radius},${height/2})`}>
          {
            pie.map((slice, i) => {
              return <path key={i} d={arc(slice)} fill={colorScale(slice.data.label)} />
            })
            }
        </g>

        <g className="legend" transform={`translate(${100 + margin + radius * 2},${height/2 - 40*pie.length/2})`}>
          {
            pie.map((slice, i) => {
              return (
                <g key={i} transform={`translate(0,${i * 40})`}>
                  <rect fill={colorScale(slice.data.label)} width="18" height="18" />
                  <text x="30" y="15" >{slice.data.label}</text>
                </g>
                )
            })
          }
        </g>
      </svg>
    )
  }
})

export default Chart
