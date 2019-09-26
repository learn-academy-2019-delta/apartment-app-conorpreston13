import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap'


class HomePage extends React.Component {
  render () {
    const {
      is_logged_in,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
      <React.Fragment>
      <Router>
      
        {is_logged_in &&
          <div>
          <center>
            <a href={sign_out_route}>Sign Out</a>
            <h1>Apartment Finder</h1>
            <Nav>
              <NavItem>
                <NavLink href = ''>Add Apartment</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href = ''>Edit Apartment</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href = ''>Delete Apartment</NavLink>
              </NavItem>
            </Nav>
            <h4>Future List of Apartments</h4>
          </center>
          </div>
        }
        {!is_logged_in &&
          <div>
          <center>
            <a href={sign_in_route}>Sign In</a>
            <h1>Apartment Finder</h1>
            <ul>
              <h4>Future List of Apartments</h4>
            </ul>
          </center>
          </div>
        }
        
      </Router>
      </React.Fragment>
    );
  }
}

export default HomePage
