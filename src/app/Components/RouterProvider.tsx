'use client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Forms from './Forms';
export default function RouterProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Forms />} />
      </Routes>
    </BrowserRouter>
  );
}
