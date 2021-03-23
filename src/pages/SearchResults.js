import { useState, useEffect } from 'react';


//Components
import Searchbar from '../components/Searchbar';
import Movies from '../components/Movies';


const SearchResults = () => {
  const [ movies, setMovies] = useState([]);

  return (
    <div className="searchResultsPage">
        <h1> Results  </h1>
        {movies.map(movie => (
          <Movies key={movie.id} {...movie}/>

        ))}
        
      </div>
     
      
   
    
    
  )
}

export default SearchResults
