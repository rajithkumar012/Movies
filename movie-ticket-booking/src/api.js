import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/',
});

export const fetchMovies = () => api.get('movies/');
export const fetchShowtimes = (movieId) => api.get(`showtimes/?movie=${movieId}`);
export const fetchSeats = (showtimeId) => api.get(`seats/?showtime=${showtimeId}`);
export const bookTickets = (data) => api.post('bookings/', data);
export const fetchBookings = (email) => api.get(`bookings/?user_email=${email}`);

export default api;
