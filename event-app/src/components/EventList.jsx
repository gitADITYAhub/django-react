import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/EventList.css'; // This will be your CSS file

const EventList = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([
    // Dummy data for example purposes; you'd fetch this from your backend
    { id: 1, event_name: 'Keith Barry\'s Virtual Valentines Brainhacking Show', date: 'Mon, Feb 14, 7:30 PM', location: 'Online event', is_liked: false },
    { id: 2, event_name: 'An evening with Kazuo Ishiguro', date: 'Wed, Dec 1, 7:30 PM', location: 'Online event', is_liked: false },
    { id: 3, event_name: 'Valentines Day Virtual Beer Festival', date: 'Sun, Feb 14, 10:00 AM', location: 'Online event', is_liked: false },
  ]);

  useEffect(() => {
    // Fetch events from your backend and set them in state
  }, []);

  const toggleLike = (eventId) => {
    setEvents(events.map(event => {
      if (event.id === eventId) {
        return { ...event, is_liked: !event.is_liked };
      }
      return event;
    }));
  };

  return (
    <div className="event-list-container">
      <header>
        <h1>Likes</h1>
        <button onClick={() => navigate('/addeventform')}>Add Event</button>
      </header>
      {events.map(event => (
        <div key={event.id} className="event-item">
          <div className="event-content">
            <div className="event-image-container">
              {/* Replace with actual image source */}
              <img src="/path-to-your-event-image.jpg" alt={event.event_name} />
            </div>
            <div className="event-info">
              <h3>{event.event_name}</h3>
              <p>{event.date}</p>
              <p>{event.location}</p>
            </div>
          </div>
          <button className="like-button" onClick={() => toggleLike(event.id)}>
            {event.is_liked ? "❤️" : "♡"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default EventList;

