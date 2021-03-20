import { useState } from 'react';


const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchHandler = (event) => {
  event.preventDefault();

 

  }

  return (
      <div className="searchbar__form"> 
        <input 
      type="search" 
      placeholder="Search for a TV show here..." 
      value={searchTerm} 
      onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button className="search-btn" onClick={onSearchHandler}>Search </button>
     
      </div>
  )
}

export default Searchbar
