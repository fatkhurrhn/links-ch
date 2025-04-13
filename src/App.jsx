import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Links';
import Tes from './tes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tes" element={<Home />} />
        <Route path="/" element={<Tes />} />
      </Routes>
    </Router>
  );
}

export default App;
