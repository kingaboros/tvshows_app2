import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Particles from 'react-particles-js';


//Components
import Navbar from './components/Navbar';

//Pages
import Homepage from './pages/Homepage';
import SearchResults from './pages/SearchResults';
import Details from './pages/Details';


function App() {
  return (
    <Router>
      <Navbar />
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
   
    <div className="container">
     <Switch> 
       <Route exact path="/" component={Homepage}/>
       <Route exact path="/results" component={SearchResults}/>
       <Route exact path="/show-details" component={Details}/>
       
     </Switch>
    </div>
   
    </Router>
  );
}

export default App;
