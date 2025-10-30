import AppFrame from '@/components/AppFrame';
import { useEventContext } from '@/contexts/EventContext';
import FlashcardScreen from '@/pages/FlashcardScreen';
import SelectFlashcardSetScreen from '@/pages/SelectFlashcardSetScreen';
import { SelectFlashcardsPage } from '@/pages/select-flashcards/SelectFlashcardsPage';
import { Route, Routes } from 'react-router';
import { AppFrameMobile } from './mobile/AppFrameMobile';

function App() {
  const { eventsByLevel } = useEventContext();
  if(!eventsByLevel) {
    return "Loading...";
  }

  return (
    <AppFrameMobile>
      <Routes>
        <Route path="/" element={<SelectFlashcardSetScreen />} />
        <Route path="/flashcards/" element={<FlashcardScreen />} />
        <Route path="/events/:eventKey/" element={<SelectFlashcardsPage />} />
      </Routes>
      </AppFrameMobile>
  );
}

export default App;
