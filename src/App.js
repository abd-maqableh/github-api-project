import React, { Component } from 'react';
import Table from './component/Table';
import Row from './component/Row';
import axios from 'axios';
import SearchBar from './component/SearchBar';

class App extends Component {
  state = {
    persons: []
  }

  
  OnCahnge = (e) => {
    console.log(e.target.value)

  }
  getrespos = (userName) =>{
    axios.get(`http://api.github.com/users/${userName}/repos`)
      .then(res => {
        this.setState({ persons: res.data });
      })
  
  }
  render() {


    return (
      <div className="App">
        <SearchBar getrespos= {this.getrespos}/>
        <Table repo={this.state.persons} />
      </div>
    )
  }
}


export default App;
