import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

const legacyRoutes: Record<string, string> = {
  '/': '/personal',
  '/blog': '/personal/blog',
  '/projects': '/personal/projects',
  '/cv': '/personal',
};

const legacyHashPath = window.location.hash.replace(/^#/, '').split('?')[0];

if (window.location.pathname === '/' && legacyHashPath.startsWith('/')) {
  window.history.replaceState(null, '', legacyRoutes[legacyHashPath] ?? '/personal');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
