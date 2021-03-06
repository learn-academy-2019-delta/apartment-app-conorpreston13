import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap'
import NewApt from './NewApt'
import Landing from './Landing'


class HomePage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
    this.getApts()
  }
  
  getApts = () => {
    /* global fetch */
    fetch('/apartments')
    .then((response) => {
      return response.json()
    })
    .then((apartments) => {
      this.setState({apartments: apartments})
    })
  }
  
  handleNewApt = (apt) => {
      console.log('It got here')
    	createApt(apt)
        .then(successApt => {
            console.log("SUCCESS! New Apartment: ", successApt);
            if (typeof successApt.address === 'string') {
                let successStatus = this.state.success
                successStatus = true
                this.setState({ success: successStatus })
                console.log(this.state.success)
                window.location.reload()
            }
        })
    }
  
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
            <br/>
            <Nav>
              <NavItem>
                <Link to = './NewApt'>Add Apartment</Link>
              </NavItem>
              <NavItem>
                <NavLink href = ''>Edit Apartment</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href = ''>Delete Apartment</NavLink>
              </NavItem>
            </Nav>
            <ul>
              {this.state.apartments.map((apt, index) => {
                return(
                  <li key={index}>{apt.address}, {apt.city}, {apt.state}</li>
                )
              })
              }
            </ul>
          </center>
          <Switch>
             <Route exact path='/newapt' render={(props) => <NewApt {...props} success = {this.state.success} handleNewApt = {this.handleNewApt}  /> } />
            
            <Route exact path='/' component={HomePage} />
          </Switch>
          </div>
        }
        
        {!is_logged_in &&
          <div>
          <center>
            <a href={sign_in_route}>Sign In</a>
            <h1>Apartment Finder</h1>
            <br/>
            <ul>
              {this.state.apartments.map((apt, index) => {
                return(
                  <li key={index}>{apt.address}, {apt.city}, {apt.state}</li>
                )
              })
              }
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
