import { ClickableLogo } from '@/components/ClickableLogo';
import { useEventContext } from '@/contexts/EventContext';
import FlashcardScreen from '@/pages/FlashcardScreen';
import { HomePage } from '@/pages/HomePage';
import { SelectFlashcardsPage } from '@/pages/select-flashcards/SelectFlashcardsPage';
import { PermanentNavDrawerLayout } from '@erica/mui-web';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router';
import { useNavItems } from './useNavItems';

function App() {
  const { eventsByLevel } = useEventContext();
  const navItems = useNavItems();
  if(!eventsByLevel) {
    return "Loading...";
  }

  return (
    <PermanentNavDrawerLayout
      containerProps={{ maxWidth: 'xl' }}
      desktopNavDrawerProps={{ sx: { width: 350 }}}
      logo={<ClickableLogo />}
      logoAlign='left'
      navItems={navItems}
    >
      <Box sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flashcards/" element={<FlashcardScreen />} />
          <Route path="/events/:eventKey/" element={<SelectFlashcardsPage />} />
        </Routes>
      </Box>
    </PermanentNavDrawerLayout>
  );
}

export default App;
