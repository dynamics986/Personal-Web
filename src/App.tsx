import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Academic from './pages/academic';
import About from './pages/About';
import Blog from './pages/Blog';
import Projects from './pages/Projects';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Academic />} />
      <Route path="/personal" element={<Layout />}>
        <Route index element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="projects" element={<Projects />} />
        <Route path="cv" element={<Navigate to="/personal" replace />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
