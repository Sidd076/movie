import React from 'react';

const ShowCard = ({ show, onClick }) => (
  <div className="show-card">
    <h2>{show.name}</h2>
    <p>{show.summary}</p>
    <button onClick={() => onClick(show)}>Show Summary</button>
  </div>
);

export default ShowCard;
