import { sanityClient } from '@/api/sanity/client';
import { Level } from '@/types/domain';
import { normalizeLevels } from '@/api/sanity/normalizeSanity';

export const fetchLevels = async (): Promise<Level[]> => {
  const rawLevels = await sanityClient.fetch(`
*[_type == "level"] | order(title asc){
  _id,
  title,
  "events": *[_type == "event" && level._ref == ^._id]{
    _id,
    title,
    slug,
    "groups": *[_type == "flashcardGroup" && event._ref == ^._id]{
      _id,
      title,
      "sets": *[_type == "flashcardSet" && group._ref == ^._id]{
        _id,
        title
      }
    }
  }
}
  `);

  return normalizeLevels(rawLevels);
};
