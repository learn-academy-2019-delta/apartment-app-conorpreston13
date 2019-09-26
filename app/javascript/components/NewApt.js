import React from "react"
import PropTypes from "prop-types"
import {
    Form,
    Button,
} from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

class NewApt extends React.Component {
    constructor(props){
    super(props)
    this.state = {
      form:{
        address: '',
        city: '',
        state: ''
      }
    }
  }
  
  handleChange = (event) => {
    let {form} = this.state
    form[event.target.name] = event.target.value
    this.setState({form: form})
  }
  
  handleSubmit = (el) => {
      el.preventDefault()
      this.props.handleNewApt(this.state.form)
  }
  
  render () {
    
    return (
      <React.Fragment>
      
        <h1>Add Apartment Listing</h1>
        
            <Form>
                <Form.Group>
                    <Form.Label>Enter Address: </Form.Label>
                    <Form.Control type='text' placeholder="Address" name='address'
                    onChange={this.handleChange} value={this.state.form.name}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Enter City: </Form.Label>
                    <Form.Control type='text' placeholder="City" name='city'
                    onChange={this.handleChange} value={this.state.form.age}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Enter State: </Form.Label>
                    <Form.Control type='text' placeholder="State" name='state' onChange={this.handleChange} value={this.state.form.enjoys}/>
                </Form.Group>
                
  
            </Form>
            <center><br/>
            <Button variant='dark' onClick={this.handleSubmit} type="submit">Create Listing</Button>
                    {this.props.success &&
                        <Redirect to = '/homepage' />
                    }
            </center>
       
      </React.Fragment>
    );
  }
}

export default NewApt
