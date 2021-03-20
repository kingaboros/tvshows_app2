import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

//Pages
import Homepage from './pages/Homepage';
import SearchResults from './pages/SearchResults';
import Details from './pages/Details';


function App() {
  return (
    <Router> 
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
