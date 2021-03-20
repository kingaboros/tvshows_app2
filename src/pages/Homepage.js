import Particles from 'react-particles-js';


//Components
import Searchbar from '../components/Searchbar';




const Homepage = () => {
  return (
    <div className="homepage">
     <Searchbar />
     <Particles
        style={{ position: "absolute" }}
        height="95%"
        width="95%"
        params={{
          particles: {
            color: {
              value: "#000000"
            },
            line_linked: {
              color: {
                value: "#000000"
              }
            },
   	        number: {
	            "value": 50
	        },
	        size: {
	            "value": 3
	        }
	    },
	    interactivity: {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />

  
  </div>

    
  )
}

export default Homepage


