import App from '@/app/App.jsx';
import { CssBaseline } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router';
import { FlashcardProvider } from './contexts/FlashcardContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FlashcardProvider>
      <HashRouter>
        <CssBaseline />
        <App />
      </HashRouter>
    </FlashcardProvider>
  </StrictMode>,
);
