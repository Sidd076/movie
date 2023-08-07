import React, { useState, useEffect } from 'react';
import ShowCard from '../components/ShowCard';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Import the global styles

const HomeScreen = () => {
  const navigate = useNavigate();
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  const handleShowSummary = (show) => {
    navigate('/summary', { state: { show } });
  };

  return (
    <div className="container">
      <div className="header">
        <h1>TV Show App</h1>
      </div>
      <div className="show-card-container">
        {shows.map((show) => (
          <ShowCard key={show.show.id} show={show.show} onClick={handleShowSummary} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
