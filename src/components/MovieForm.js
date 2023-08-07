import React, { useState } from 'react';

const MovieForm = ({ showName, onSubmit }) => {
  const [name, setName] = useState(showName);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userDetails = { name, email, phone };
    onSubmit(userDetails);
  };

  return (
    <div className="movie-form">
      <h2>Book Movie Ticket</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Show Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} readOnly />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Phone:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </label>
        <button type="submit">Book Ticket</button>
      </form>
    </div>
  );
};

export default MovieForm;
