import { useEffect, useState } from 'react';



//Components
import Searchbar from '../components/Searchbar';
import Background from'../components/Background';




const Homepage = () => {
  


  const [ shows, setShows ] = useState([]);

  useEffect(( ) => {
    const showsResponse = fetch(apiUrl)
    .then(res => res.json())
    .then (data =>{
      console.log(data);
      setShows(showsR);

    });
    const showsR = showsResponse.json();

  })
  
    const apiUrl ="http://api.tvmaze.com/search/shows?q=girls";
  
 
  

  return (
    <div className="homepage">
     <Searchbar />
    
     <Background />
  
  </div>

    
  )
}

export default Homepage


