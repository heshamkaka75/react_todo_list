import React, { Component } from 'react'
import AddItem from './components/AddItem/AddItem'
import TodoItems from './components/TodoItems/TodoItems'
class App extends Component {
  state = {
    items: [
      {id: 1 , name: 'Ali' , age: 32},
      {id: 2 , name: 'Samah' , age: 16},
      {id: 3 , name: 'Mohamed' , age: 58}
    ]
  }

  deleteItem = (id) => {
    let allItem = this.state.items.filter(all => {
      return all.id !== id
    })
    this.setState({items: allItem})
  }

  addItem = (i) => {
    i.id = Math.random()
    let items = this.state.items
    items.push(i)
    this.setState({items})
  }

  render() {
    return (
      <div className='App container'>
         <h1 className='text-center'>ToDo List...</h1>
         <TodoItems items = {this.state.items} deleteItem ={this.deleteItem} />
         <AddItem addItem = {this.addItem} />
      </div>
    )
  }
}

export default App