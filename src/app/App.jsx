import { ClickableLogo } from '@/components/ClickableLogo';
import { useEventContext } from '@/contexts/EventContext';
import { FlashcardPage } from '@/pages/FlashcardPage';
import { HomePage } from '@/pages/HomePage';
import { SelectFlashcardsPage } from '@/pages/select-flashcards/SelectFlashcardsPage';
import { PermanentNavDrawerLayout } from '@erica/mui-web';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router';

export const App = () => {
  const { navItems } = useEventContext();
  if (!navItems) {
    return 'Loading...';
  }

  return (
    <PermanentNavDrawerLayout
      containerProps={{ maxWidth: 'xl' }}
      desktopNavDrawerProps={{ sx: { width: 350 } }}
      logo={<ClickableLogo />}
      logoAlign='left'
      navItems={navItems}
    >
      <Box sx={{ mt: 4 }}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/flashcards/' element={<FlashcardPage />} />
          <Route path='/events/:eventKey/' element={<SelectFlashcardsPage />} />
        </Routes>
      </Box>
    </PermanentNavDrawerLayout>
  );
};
