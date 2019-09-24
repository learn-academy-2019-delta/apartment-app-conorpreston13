import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'


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
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }
        {!is_logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
            <h1>Apartment Finder</h1>
            <ul>
            </ul>
          </div>
        }
        
      </Router>
      </React.Fragment>
    );
  }
}

export default HomePage
