export interface Flashcard {
  _id: string;
  question: string;
  answer: string;
  frontImage?: {
    asset: {
      _ref: string
      _type: string
    }
  };
  backImage?: {
    asset: {
      _ref: string
      _type: string
    }
  };
}