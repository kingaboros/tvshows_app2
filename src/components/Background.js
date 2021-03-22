import Particles from 'react-particles-js';

const Background = () => {
  return (
    <div>
      <Particles
        style={{ position: "cover" }}
        params={{
          particles: {
            color: {
              value: "#39746a"
            },
            line_linked: {
              color: {
                value: "#6f7d99"
              }
            },
   	        number: {
	            "value": 100
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

export default Background
