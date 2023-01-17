import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EventDetails from './components/EventDetails';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Likes from './components/Likes';
import Home from './components/Home';
import Login from './components/Login';
import SignupForm from './components/Signup';
import BillingPage from './components/BillingPage';
import AddEvent from './components/AddEvent';
import Auth from './components/Auth';
import Account from './components/Account';
import "./App.css";
import { useEffect, useState } from 'react';

function App() {

  // event states
  const [events, setEvents] = useState([]);
  const [likes, setLikes] = useState([])

  useEffect(() => {
    fetch("https://event-plug.onrender.com/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  // add event to Likes
  function addToLikes(item) {
    const filterFavorites = likes.filter((event) => event.id !== item.id)
    const newLikes = [...filterFavorites, item]
    setLikes(newLikes)
  }

  console.log(events)

  // authentication
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
        <NavBar setUser={setUser} />
        <Routes>
          <Route path='/' element={<Home events={events}/>} />
          <Route path='/favorites' element={<Likes likes={likes} />} />
          <Route path='/events/:id' element={<EventDetails addToLikes={addToLikes} />} />
          <Route path='/checkout' element={<BillingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<SignupForm />} />
          <Route path='/create' element={<AddEvent />} />
          <Route path='/profile' element={<Account />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;