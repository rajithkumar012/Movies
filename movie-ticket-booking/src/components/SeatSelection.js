import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();

  const seats = Array(20).fill().map((_, index) => ({
    id: index + 1,
    booked: Math.random() < 0.3 
  }));

  const handleSeatClick = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
    } else {
      
      navigate('/booking-confirmation', { state: { selectedSeats } });
    }
  };

  return (
    <div>
      <h1>Select Your Seats</h1>
      <div className="seat-map">
        {seats.map(seat => (
          <button
            key={seat.id}
            disabled={seat.booked}
            className={`seat ${seat.booked ? 'booked' : ''} ${selectedSeats.includes(seat.id) ? 'selected' : ''}`}
            onClick={() => handleSeatClick(seat.id)}
          >
            {seat.id}
          </button>
        ))}
      </div>
      <button onClick={handleBooking}>Confirm Booking</button>
    </div>
  );
};

export default SeatSelection;
