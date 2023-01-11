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
import Auth from './components/Auth';

import "./App.css";
import { useEffect, useState } from 'react';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("https://event-plug.onrender.com/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Auth onLogin={setUser} />;

  return (
    <div className="App">
      <Router>
        <NavBar />
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