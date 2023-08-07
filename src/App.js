import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import SummaryScreen from './screens/SummaryScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/summary" element={<SummaryScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
