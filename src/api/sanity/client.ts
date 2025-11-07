import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'mbovc4gh',   // your Sanity project ID
  dataset: 'production',   // or another dataset if you have one
  apiVersion: '2025-11-07', // use current date
  useCdn: true             // `true` = fast, cached; `false` = fresh data
})
