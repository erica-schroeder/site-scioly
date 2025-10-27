import Flashcard from "../components/Flashcard";
import shuffle from 'lodash-es/shuffle';

const generateFlashcards = (setDefinition) => {
    const shuffledSet = shuffle(setDefinition);

    return shuffledSet.map((def, index) =>
        <Flashcard key={index}
            frontText={def.question}
            frontImage={ def.image ? require(`../images/${def.image}`) : null }
            backText={def.answer}
        />);
};

export default generateFlashcards;
