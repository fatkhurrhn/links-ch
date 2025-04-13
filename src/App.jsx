import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Links';
import Tes from './tes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tes" element={<Tes />} />
      </Routes>
    </Router>
  );
}

export default App;
