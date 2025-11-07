import { allEventsQuery } from '@/api/sanity/queries/events';
import { useQuery } from '@tanstack/react-query';

export function useEvents() {
  return useQuery({
    queryKey: ['events'],
    queryFn: () => client.fetch(allEventsQuery),
    staleTime: 1000 * 60 * 30, // 30 min
  });
}
