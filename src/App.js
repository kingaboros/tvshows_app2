import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Particles from 'react-particles-js';


//Components
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';

//Pages
import Homepage from './pages/Homepage';
import SearchResults from './pages/SearchResults';
import Details from './pages/Details';


function App() {
  return (
    <Router>
      <Navbar />
      
      
   
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
