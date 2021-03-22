import { useState } from 'react';
import axios from 'axios'; 


//Components
import Searchbar from '../components/Searchbar';
import Background from'../components/Background';






const Homepage = () => {

  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });
  
    const apiUrl ="http://api.tvmaze.com/search/shows?";
  
    const search = (event) => {
      if (event.key === "Enter") {
        axios(apiUrl + "q=" + state.s).then(({ data }) => {
          let results = data.Search;

          setState(prevState => {
            return { ...prevState, results: results}
          })
        })
      }
    }
  
    const handleInput =(event) => {
    let s = event.target.value;
  
    setState(prevState => {
      return { ...prevState, s:s} 
    });
  
    console.log(state.s);
  }
  

  return (
    <div className="homepage">
     <Searchbar handleInput={handleInput} search={search} />
     <Background />
  
  </div>

    
  )
}

export default Homepage


