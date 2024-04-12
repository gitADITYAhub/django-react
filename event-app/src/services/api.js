import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

export const fetchRootMessage = async () => {
    try {
        const response = await axios.get('http://localhost:8000/'); // Adjust if your root URL is different
        return response.data; // This should be the "Hello, this is the root of my web app" message
    } catch (error) {
        console.error('Error fetching the root message:', error);
        return null;
    }
};

export const createEvent = async (eventData) => {
    try {
        const response = await axios.post(`${API_URL}events/`, eventData);
        return response.data; // Return the created event data
    } catch (error) {
        console.error('Failed to create event:', error);
        return null;
    }
};

export const fetchEvents = async () => {
    const response = await axios.get(`${API_URL}events/`);
    return response.data;
};

export const toggleLikeEvent = async (eventId) => {
    // Get the specific event, update the `is_liked` field, then PUT back to the API
};
export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}login/`, credentials);
        // Save the received token in local storage or context
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error.response);
        throw error;
    }
};

export const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}register/`, userData);
        return response.data;
    } catch (error) {
        console.error('Error registering:', error.response);
        throw error;
    }
};