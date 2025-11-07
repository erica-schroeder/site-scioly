import { client } from '@/api/sanity/client';
import { flashcardsBySetsQuery } from '@/api/sanity/queries/flashcards';
import imageUrlBuilder from '@sanity/image-url';
import { useMutation } from '@tanstack/react-query';

const builder = imageUrlBuilder(client);
const urlFor = (source) => builder.image(source).url();

const fetchFlashcards = async (setIds: string[]) => {
    if (!setIds.length) return [];
    const cards = await client.fetch(flashcardsBySetsQuery, { setIds })
    return cards.map((c) => ({
        ...c,
        frontImageUrl: c.frontImage ? urlFor(c.frontImage) : undefined,
        backImageUrl: c.backImage ? urlFor(c.backImage) : undefined,
    }));
};

export const useFlashcards = () => {
    return useMutation({
        mutationFn: fetchFlashcards
    });
};