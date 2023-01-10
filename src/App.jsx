import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Likes from './components/Likes';
import Home from './components/Home';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Likes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
