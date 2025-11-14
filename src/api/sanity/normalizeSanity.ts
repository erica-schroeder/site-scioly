import { sanityClient } from '@/api/sanity/client';
import { Flashcard, Level } from '@/types/domain';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => builder.image(source).url();

export const normalizeLevels = (rawLevels: any[]): Level[] => {
  return rawLevels.map((level) => ({
    id: level._id,
    title: level.title,
    events: (level.events || []).map((event: any) => ({
      id: event._id,
      key: event.slug?.current ?? '',
      title: event.title,
      groups: (event.groups || []).map((group: any) => ({
        id: group._id,
        title: group.title,
        sets: (group.sets || []).map((set: any) => ({
          id: set._id,
          title: set.title,
          description: set.description,
        })),
      })),
    })),
  }));
};

export const normalizeFlashcards = (rawFlashcards: any[]): Flashcard[] => {
  return rawFlashcards.map((card) => ({
    id: card._id,
    question: card.question,
    answer: card.answer,
    frontImage: card.frontImage ? urlFor(card.frontImage?.asset) : null,
    backImage: card.backImage ? urlFor(card.backImage?.asset) : null,
  }));
};
