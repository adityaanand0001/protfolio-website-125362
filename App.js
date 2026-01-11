import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import ProjectDetail from './pages/ProjectDetail';

export default function App() {
  return (
    <MemoryRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </Layout>
    </MemoryRouter>
  );
}