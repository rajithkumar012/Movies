import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../api';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetchMovies();
      setMovies(response.data);
    };
    getMovies();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Movies</h1>
      <div className="grid grid-cols-3 gap-4">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <div className="border rounded-lg p-4">
              <img src={movie.poster_url} alt={movie.name} />
              <h2 className="text-xl mt-2">{movie.name}</h2>
              <p>{movie.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
