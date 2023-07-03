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
    axios.post('http://localhost:1100/', {
      term: term
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
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