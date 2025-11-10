import { useQuery } from '@tanstack/react-query';
import { fetchLevels } from '../sanity/eventsApi';

export function useEvents() {
  return useQuery({
    queryKey: ['events'],
    queryFn: fetchLevels,
  });
}
