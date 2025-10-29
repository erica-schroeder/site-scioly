import { useFlashcardContext } from '@/contexts/FlashcardContext';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { IconButton, Stack, Typography } from '@mui/material';
import HideableComponent from '../components/HideableComponent';
import Flashcard from '@/components/Flashcard';
import CongratsCard from '@/components/CongratsCard';

const FlashcardScreen = () => {
    const {
        currentCard,
        currentIndex,
        numCards,
        goNext,
        goPrevious,
    } = useFlashcardContext();

    console.log("numcards", numCards)

    const isFinished = currentIndex >= numCards;
    if (!isFinished && (currentCard === null)) {
        return null;
    }

    return (
        <Stack spacing={2} paddingTop={10} alignItems="center">
            {isFinished
                ? <CongratsCard />
                : <Flashcard key={currentIndex}
                    frontText={currentCard.question}
                    frontImage={currentCard.image}
                    backText={currentCard.answer}
                />
            }


            <Stack maxWidth="sm" sx={{ width: "100%" }} direction="row" alignItems="center" justifyContent="space-evenly" >
                <HideableComponent visible={currentIndex === 0 ? false : true} >
                    <IconButton onClick={goPrevious}>
                        <ArrowBackRoundedIcon sx={{ color: 'black', fontSize: 45 }} />
                    </IconButton>
                </HideableComponent>

                <HideableComponent
                    visible={currentIndex < numCards ? true : false}
                >
                    <Typography>
                        {`${currentIndex + 1} / ${numCards}`}
                    </Typography>
                </HideableComponent>

                <HideableComponent visible={currentIndex >= numCards ? false : true}>
                    <IconButton
                        onClick={goNext}>
                        <ArrowForwardRoundedIcon sx={{ color: 'black', fontSize: 45 }} />
                    </IconButton>
                </HideableComponent>
            </Stack>
        </Stack>
    );
}

export default FlashcardScreen;
