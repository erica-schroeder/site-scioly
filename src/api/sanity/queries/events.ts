export const allEventsQuery = `
  *[_type == "event"] | order(title asc) {
    _id,
    title,
    slug,
    level->{
       _id,
       title
    },
  }
`;

export const singleEventBySlugQuery = `
  *[_type == "event" && slug.current == $slug][0]{
    _id,
    title,
    level->{
       _id,
       title
    },
  }
`;