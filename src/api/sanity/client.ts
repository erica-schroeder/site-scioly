import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'mbovc4gh',
  dataset: 'production',
  apiVersion: '2025-11-07',
  useCdn: true,
});
