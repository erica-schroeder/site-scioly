export interface Set {
  id: string;
  title: string;
}

export interface Group {
  id: string;
  title: string;
  sets: Set[];
}

export interface Event {
  id: string;
  key: string; // Used for routing path param and CMS slugs
  title: string;
  groups: Group[];
}

export interface Level {
  id: string;
  title: string;
  events: Event[];
}

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  frontImage?: string;
  backImage?: string;
}
