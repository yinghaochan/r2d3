import React, { PropTypes } from 'react'
import {IndexLink, Link} from 'react-router'


const Nav = (props, context) => ( 
  <div>
    <li> <IndexLink to="/"> Home </IndexLink> </li>
    <li> <Link to="/horzbarchart"> Horizontal Bar Chart </Link> </li>  
  </div>
)

export default Nav;
