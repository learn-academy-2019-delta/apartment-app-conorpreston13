import React from "react"
import PropTypes from "prop-types"
class HomePage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: [
        {
          name: 'Apartment1',
          address: '321 Apartment Street'
        },
        {
          name: 'Apartment2',
          address: '654 Apartment Street'
        }
        ]
    }
  }
  
  
  render () {
    return (
      <React.Fragment>
        <h1>Apartment App</h1>
        <ul>
          {this.state.apartments.map((apartment, index) => {
            return(
            <li key ={index}>{apartment.name}</li>
            )
          })
        }
        </ul>
      </React.Fragment>
    );
  }
}

export default HomePage
