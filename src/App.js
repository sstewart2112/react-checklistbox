import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      list:[
        {id:1, caption:'List Item 1', checked:true},
        {id:2, caption:'List Item 2', checked:false},
        {id:3, caption:'List Item 3', checked:true},
        {id:4, caption:'List Item 4', checked:false}
      ]
    }
  }



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Prototype</h2>
        </div>
        <div>          
            <input type="text"/>
            <ul>
              { this.state.list.map(listItem => <li key={listItem.id}><input type="checkbox" defaultChecked={listItem.checked}/> {listItem.caption} </li>) }
            </ul>
        </div>
      </div>
    );
  }
}

export default App;
