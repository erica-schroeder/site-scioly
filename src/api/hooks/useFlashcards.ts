import { useMutation } from '@tanstack/react-query';
import { fetchFlashcardsForSets } from '../sanity/flashcardsApi';

export const useFlashcards = () => {
    return useMutation({
        mutationFn: fetchFlashcardsForSets
    });
};