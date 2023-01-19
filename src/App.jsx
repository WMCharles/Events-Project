import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EventDetails from './components/EventDetails';
import BillingPage from './components/BillingPage';
import EditEvent from './components/EditEvent';
import MyEvents from './components/MyEvents';
import SignupForm from './components/Signup';
import AddEvent from './components/AddEvent';
import Account from './components/Account';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './components/Login';
import Likes from './components/Likes';
import Home from './components/Home';
import Auth from './components/Auth';
import "./App.css";
import { useEffect, useState } from 'react';

function App() {

  // event states
  const [events, setEvents] = useState([]);
  const [likes, setLikes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://event-plug.onrender.com/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false)
      });
  }, []);

  // add event to Likes
  function addToLikes(item) {
    const filterFavorites = likes.filter((event) => event.id !== item.id)
    const newLikes = [...filterFavorites, item]
    setLikes(newLikes)
  }


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
        <NavBar setUser={setUser} user={user} />
        <Routes>
          <Route path='/' element={<Home events={events} loading={loading} />} />
          <Route path='/favorites' element={<Likes likes={likes} user={user}/>} />
          <Route path='/events/:id' element={<EventDetails addToLikes={addToLikes} user={user} />} />
          <Route path='/checkout' element={<BillingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<SignupForm />} />
          <Route path='/create' element={<AddEvent user={user} />} />
          <Route path='/profile' element={<Account user={user}/>} />
          <Route path='/myevents' element={<MyEvents user={user}/>} />
          <Route path='/edit/:id' element={<EditEvent />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;