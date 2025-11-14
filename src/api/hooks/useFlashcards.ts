import { fetchFlashcardsForSets } from '@/api/sanity/flashcardsApi';
import { useMutation } from '@tanstack/react-query';

export const useFlashcards = () => {
  return useMutation({
    mutationFn: fetchFlashcardsForSets,
  });
};
