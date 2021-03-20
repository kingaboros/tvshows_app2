import { Link } from 'react-router-dom';

import '../index.css';

const Navbar = () => {
  return (
    <div className="navBar">
      <div className="container">
        <nav className="navBar__nav"> 
          <h1 className="app__logo"> 
           <Link to="/">
            <i class="far fa-play-circle"></i> TV Show App
           </Link>
          </h1>
          <ul className="list-menu">
            <li className="list-item">
            <Link to="/">HOME</Link>     
            </li>
            <li className="list-item">
            <Link to="/results">RESULTS</Link>     
            </li>
            <li className="list-item">
            <Link to="/show-details">DETAILS</Link>     
            </li>
          </ul>
        </nav>
      </div>
     
    </div>
  )
}

export default Navbar
