import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/bookings/');
        setBookings(response.data); 
      } catch (err) {
        setError("Failed to fetch booking history");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []); 

  if (loading) {
    return <p>Loading booking history...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Booking History</h1>
      {bookings.length > 0 ? (
        <ul>
          {bookings.map((booking, index) => (
            <li key={index}>
              <h2>Booking {index + 1}</h2>
              <p>Movie: {booking.movie_name}</p>
              
              <p>
                Seats: {Array.isArray(booking.seats) 
                          ? booking.seats.join(", ") 
                          : typeof booking.seats === 'object' 
                          ? JSON.stringify(booking.seats) 
                          : booking.seats}
              </p>
              <p>Showtime: {new Date(booking.showtime).toLocaleString()}</p>
              <p>Booking Date: {new Date(booking.booking_date).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No booking history available.</p>
      )}
    </div>
  );
};

export default BookingHistory;
