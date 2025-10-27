import { Route, Routes } from 'react-router';
import FlashcardScreen from '@/screens/FlashcardScreen';
import SelectFlashcardSetScreen from '@/screens/SelectFlashcardSetScreen';

function App() {
  return (
      <Routes>
        <Route path="/" element={<SelectFlashcardSetScreen />} />
        <Route path="/flashcards/" element={<FlashcardScreen />} />
      </Routes>
  );
}

export default App;
