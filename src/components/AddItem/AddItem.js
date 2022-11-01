import React, { Component } from 'react'
import './addItem.css'

class AddItem extends Component {
  state = {
    name: '',
    age: ''
  }
  handelChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }


  handelSubmit = (e) => {
    e.preventDefault()
    if(e.target.name.value === ''){
      return false
    }else{
      this.props.addItem(this.state)
      this.setState({
        name: '',
        age: ''
      })
    }

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handelSubmit}>
          <input type='text' placeholder='Enter your name...' id='name' onChange={this.handelChange} value={this.state.name} />
          <input type='number' placeholder='Enter your age...' id='age' onChange={this.handelChange} value={this.state.age} />
          <input type='submit' value='add' />
        </form>
      </div>
    )
  }
}

export default AddItem