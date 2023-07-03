import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [term, setTerm] = useState('');

  // event handler function to take input string for query
  function handleInput(e) {
    setTerm(e.target.value);
  }

  function handleSearch() {
    console.log(term);
    axios.get("/search", { params: { term: term } }).then((res) => {
      console.log('success', res);
    }).catch((err) => {
      console.log('error', err);
    });
  }


  return (
    <div>Input search here
      <input type='search' onChange={handleInput}></input>
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default App;