// components/AddEventForm.js

import React, { useState } from 'react';
import { createEvent} from '../services/api';  // Make sure to implement this function
import './style/AddEventForm.css'
const AddEventForm = ({ onEventAdded }) => {
  const [eventData, setEventData] = useState({
    event_name: '',
    date: '',
    time: '',
    location: '',
    is_liked: false,
    user_id: '' // Assuming you will pass the user ID from the parent component
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would call the function to send the data to your API
    const added = await createEvent(eventData);
    if (added) {
      onEventAdded(added); // Callback to notify the parent component
      setEventData({
        event_name: '',
        date: '',
        time: '',
        location: '',
        is_liked: false,
        user_id: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-event-form">
      <input
        type="text"
        name="event_name"
        placeholder="Event Name"
        value={eventData.event_name}
        onChange={handleInputChange}
        required
        className="form-input"
      />
      <input
        type="date"
        name="date"
        value={eventData.date}
        onChange={handleInputChange}
        required
        className="form-input"
      />
      <input
        type="time"
        name="time"
        value={eventData.time}
        onChange={handleInputChange}
        required
        className="form-input"
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={eventData.location}
        onChange={handleInputChange}
        required
        className="form-input"
      />
      <input
        type="text"
        name="user_id"
        placeholder="User ID"
        value={eventData.user_id}
        onChange={handleInputChange}
        required
        className="form-input"
      />
      <input
        type="submit"
        value="Add Event"
        className="form-submit"
      />
    </form>
  );
};

export default AddEventForm;
