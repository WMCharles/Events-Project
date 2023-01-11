import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EventDetails from './components/EventDetails';
import CheckoutPage from './components/CheckoutPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Likes from './components/Likes';
import Home from './components/Home';
import Login from './components/Login';
import EventPage from './components/CreateEvent';
import SignupForm from './components/Signup';

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
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<SignupForm />} />
          <Route path='/create' element={<EventPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;