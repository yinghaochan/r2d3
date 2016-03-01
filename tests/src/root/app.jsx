import React, { PropTypes } from 'react'
import Nav from './nav.jsx'

const ulStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  width: '15%',
  backgroundColor: '#f1f1f1',
  height: '100%', 
  position: 'fixed', 
  overflow: 'auto', 
}

const contentStyle = {
  marginLeft: '16%',
  padding: '5px',
} 

const App = React.createClass({
  render() {
    return (
      <div className="react">
          <ul style={ulStyle}>
            <li> <h1>R2-D3</h1> </li>
            <Nav />
          </ul>
        <div style={contentStyle}>{this.props.children}</div>
      </div>
    )
  }
})


export default App
