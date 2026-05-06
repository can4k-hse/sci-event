import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { App } from './App';
import { Program } from './pages/Program';
import { QR } from './pages/QR';
import { Notifications } from './pages/Notifications';
import { More } from './pages/More';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/program" element={<Program />} />
          <Route path="/qr" element={<QR />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/more" element={<More />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
