import React, { useState } from 'react';
import './App.css';
import Searchbox from './Components/searchbox';
import Flaglist from './Components/flaglist';
import { flagsarray } from './Components/flagsarray';

function App(){



  const[flagarray, setFlagarray] = useState(flagsarray);
  const[searchfield, setSearchfield] = useState('');

  const searchChangeHandler = (e) => {
    setSearchfield(e.target.value)
  }


    const filterdflag = flagarray.filter(flag => {
      return flag.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())

    })

    return (
      <div className="App">
        <h1>Asian Flags</h1>
        <Searchbox searchChange={searchChangeHandler} />
        <Flaglist flagsarray={filterdflag} />
      </div>
    );
  }


export default App;
