


//Components
import Searchbar from '../components/Searchbar';
import Movies from '../components/Movies';


const SearchResults = () => {
  const movies = ["1", "2", "3"];

  return (
      <div className="searchResultsPage">
        {movies.map(movies => (
          <Movies />

        ))}
        
      </div>
     
      
   
    
    
  )
}

export default SearchResults
