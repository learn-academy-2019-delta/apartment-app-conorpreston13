import React from "react"
import PropTypes from "prop-types"

class Landing extends React.Component {
  render () {
    const {
    is_logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default Landing
