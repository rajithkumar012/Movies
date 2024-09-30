import React, { useEffect, useState } from 'react';
import { fetchShowtimes } from '../api';
import { useParams, Link } from 'react-router-dom';

const MovieDetail = () => {
  const { movieId } = useParams();
  const [showtimes, setShowtimes] = useState([]);

  useEffect(() => {
    const getShowtimes = async () => {
      const response = await fetchShowtimes(movieId);
      setShowtimes(response.data);
    };
    getShowtimes();
  }, [movieId]);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Showtimes</h1>
      <div>
        {showtimes.map((showtime) => (
          <Link key={showtime.id} to={`/seats/${showtime.id}`}>
            <div className="border rounded-lg p-4 mb-2">
              {new Date(showtime.time).toLocaleString()}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieDetail;
