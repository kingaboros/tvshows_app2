import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




//Components
import Navbar from './components/Navbar';


//Pages
import Homepage from './pages/Homepage';
import SearchResults from './pages/SearchResults';
import Details from './pages/Details';


function App() {
  
  return (
    <div className="tvApp">
      <Router>
      <Navbar />
    <Switch> 
       <Route exact path="/" component={Homepage}/>
       <Route exact path="/results" component={SearchResults}/>
       <Route exact path="/show-details" component={Details}/>
       
    </Switch>
    
   
    </Router>
    </div>
    
  );
}

export default App;
