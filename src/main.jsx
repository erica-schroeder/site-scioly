import App from '@/app/App.jsx';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router';
import { FlashcardProvider } from './contexts/FlashcardContext';
import { theme } from './styles/theme';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <FlashcardProvider>
      <HashRouter>
        <CssBaseline />
        <App />
      </HashRouter>
    </FlashcardProvider>
    </ThemeProvider>
  </StrictMode>,
);
