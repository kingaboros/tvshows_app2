import { useState } from 'react';

import '../index.css';


const Searchbar = ({ handleInput, search }) => {
   
  return (
      <div className="searchbar__form"> 
        <input className="searchbar__input"
      type="text" 
      placeholder="Search for a TV show here..." 
      onChange={handleInput}
      onKeyPress={search}
        />
        <button className="search-btn" >Search </button>
     
      </div>
  )
}

export default Searchbar
