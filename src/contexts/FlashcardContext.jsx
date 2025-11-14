import { useFlashcards } from '@/api/hooks/useFlashcards';
import { shuffle } from 'lodash-es';
import { createContext, useContext, useEffect, useState } from 'react';

const FlashcardContext = createContext(null);

const STORAGE_KEY = 'flashcardState';

export const FlashcardProvider = ({ children }) => {
  const storedCards = JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || [];
  const [flashcards, setFlashcards] = useState(storedCards?.flashcards ?? []);
  const [currentIndex, setCurrentIndex] = useState(
    storedCards?.currentIndex ?? 0
  );

  const { mutateAsync: loadCards, isPending } = useFlashcards();

  useEffect(() => {
    const stateToStore = {
      currentIndex,
      flashcards,
    };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(stateToStore));
  }, [currentIndex, flashcards]);

  const loadAndShuffleSets = async (setIds) => {
    const cards = await loadCards(setIds);
    const shuffled = shuffle(cards);
    setFlashcards(shuffled);
    setCurrentIndex(0);
  };

  const numCards = flashcards.length;

  const goPrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, flashcards.length));
  };

  const currentCard = flashcards[currentIndex] || null;

  return (
    <FlashcardContext.Provider
      value={{
        loading: isPending,
        loadAndShuffleSets,
        numCards,
        currentIndex,
        currentCard,
        goPrevious,
        goNext,
      }}
    >
      {children}
    </FlashcardContext.Provider>
  );
};

export const useFlashcardContext = () => useContext(FlashcardContext);
