import { useState } from 'react';

import '../index.css';

//Components
import Movies from '../components/Movies';


const Searchbar = ({ handleInput, search }) => {
  
  const apiUrl ="http://api.tvmaze.com/search/shows?q=";
  const [ movies, setMovies] = useState([]);
  const [ searchTerm, setSearchTerm] = useState('');
  


  
  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (searchTerm) {
      fetch(apiUrl+searchTerm)
    .then(res => res.json())
    .then (data =>{
      
      setMovies(data);
    });
      setSearchTerm('');
    }
    

  }

  const handleOnChange = (event) => {
    setSearchTerm(event.target.value);
  }


  return (
      <div className="searchbar__form"> 
      <form className="search__form" onSubmit={handleOnSubmit}> 
        <input className="searchbar__input"
          type="text" 
          placeholder="Search for a TV show here..." 
          value={searchTerm}
          onChange={handleOnChange}
          
        />
        <button className="search-btn" >Search </button>
        </form>
        <div>
        {movies.map(movie => (
          <Movies key={movie.id} {...movie}/>

        ))}
        </div>
         
        
     
      </div>
  )
}

export default Searchbar
