import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import SeatSelection from './components/SeatSelection';
import BookingConfirmation from './components/BookingConfirmation';
import BookingHistory from './components/BookingHistory';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/movies/:movieId" element={<MovieDetail />} />
      <Route path="/seats/:showtimeId" element={<SeatSelection />} />
      <Route path="/booking-confirmation" element={<BookingConfirmation />} />
      <Route path="/booking-history" element={<BookingHistory />} />
    </Routes>
  </Router>
);

export default App;
