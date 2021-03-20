import { useState } from 'react';


const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchHandler = (event) => {
  event.preventDefault();

  console.log("Searching for " + searchTerm);

  }

  return (
    <div className="searchbar">
     <form className="searchbar_form">
      <input 
      type="text" 
      placeholder="Search for a TV show here..." 
      value={searchTerm} 
      onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button className="search-btn" onClick={onSearchHandler}>Search

        </button>
     </form>
    </div>
  )
}

export default Searchbar
