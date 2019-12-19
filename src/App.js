import React, { Component } from 'react';
import './App.css';
import Searchbox from './Components/searchbox';
import Flaglist from './Components/flaglist';
import { flagsarray } from './Components/flagsarray';

class App extends Component {

  state = {
    flagsarray: flagsarray,
    searchfield: ''
  }

  searchChangeHandler = (e) => {
    this.setState({ searchfield: e.target.value })
  }

  render() {
    const filterdflag = this.state.flagsarray.filter(flag => {
      return flag.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())

    })

    return (
      <div className="App">
        <h1>Asian Flags</h1>
        <Searchbox searchChange={this.searchChangeHandler} />
        <Flaglist flagsarray={filterdflag} />
      </div>
    );
  }
}

export default App;
