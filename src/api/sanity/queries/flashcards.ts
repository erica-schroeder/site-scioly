export const flashcardsBySetsQuery = `
*[_type == "flashcard" && set._ref in $setIds]{
                            _id,
                            question,
                            answer,
                            frontImage,
                            backImage,
}
`;
