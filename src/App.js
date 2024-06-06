
import './App.css';
import { BrowserRouter as Router, Route,Routes,Link } from 'react-router-dom'; 
import Home from './Home';
import Search from './Search';
import Saved from './Saved';

function App() {
  return (
    <Router>
      <div>
      <nav>
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Search">Search</Link></li>
        <li><Link to="/Saved">Saved</Link></li>
      
      </ul>
    </nav>
     <Routes>
     <Route  path='/Home' element={<Home />} />
        <Route  path='/Search' element={<Search />} />
        <Route  path='/Saved' element={<Saved/>} />
     </Routes>
      </div>
    </Router>
  );
}

export default App;
