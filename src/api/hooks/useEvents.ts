import { fetchLevels } from '@/api/sanity/eventsApi';
import { useQuery } from '@tanstack/react-query';

export const useEvents = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: fetchLevels,
  });
};
