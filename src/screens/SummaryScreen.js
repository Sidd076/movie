import React from 'react';
import MovieForm from '../components/MovieForm';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import '../App.css'; // Import the CSS file

const SummaryScreen = () => {
  const location = useLocation();
  const { show } = location.state || {};
  
  const navigate = useNavigate(); // Define navigate using useNavigate

  const handleBooking = (userDetails) => {
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    navigate('/'); // Use navigate to go back to the home screen
  };

  return (
    <div className="summary-screen">
      {show && (
        <>
          <h1>Summary for {show.name}</h1>
          <p dangerouslySetInnerHTML={{ __html: show.summary }} />
          <MovieForm showName={show.name} onSubmit={handleBooking} />
        </>
      )}
    </div>
  );
};

export default SummaryScreen;
