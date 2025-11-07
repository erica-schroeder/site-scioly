import App from '@/app/App.jsx';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router';
import { EventProvider } from './contexts/EventContext';
import { FlashcardProvider } from './contexts/FlashcardContext';
import theme from './styles/theme';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <EventProvider>
          <FlashcardProvider>
            <HashRouter>
              <CssBaseline />
              <App />
            </HashRouter>
          </FlashcardProvider>
        </EventProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
);
