import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {  }

  logOut= ()=>{
    localStorage.removeItem('token');
  }
  render() { 
    return (  
      <div className= 'App'></div>
    );
  }
} 

 
export default App;

