import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EventDetails from './components/EventDetails';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
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
          <Route path='/details' element={<EventDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
