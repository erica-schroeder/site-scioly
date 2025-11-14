import { sanityClient } from '@/api/sanity/client';
import { Flashcard } from '@/types/domain';
import { normalizeFlashcards } from '@/api/sanity/normalizeSanity';

export const fetchFlashcardsForSets = async (
  setIds: string[]
): Promise<Flashcard[]> => {
  if (!setIds?.length) return [];

  const rawFlashcards = await sanityClient.fetch(
    `
      *[_type == "flashcard" && set._ref in $setIds]{
     _id,
     question,
     answer,
     frontImage,
     backImage,
}
  `,
    { setIds }
  );

  return normalizeFlashcards(rawFlashcards);
};
