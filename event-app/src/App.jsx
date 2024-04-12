import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import EventList from './components/EventList';
import Login from './components/Login';
import Register from './components/Register';
import { fetchEvents } from './services/api';
import AddEventForm from './components/AddEventForm';

const App = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const eventsFromServer = await fetchEvents();
      setEvents(eventsFromServer);
    };
    getEvents();
  }, []);

  const toggleLike = async (eventId) => {
    // Call service to toggle like and update state accordingly
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/addeventform" element={<AddEventForm />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;

// import React from 'react';
// import Event from './components/Event'; // Ensure the path is correct

// const App = () => {
//   return (
//     <div>
//       <Event />
//       {/* Other components or routes */}
//     </div>
//   );
// };

// export default App;
