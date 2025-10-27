import { useFlashcardContext } from '@/contexts/FlashcardContext';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { IconButton, Stack, Typography } from '@mui/material';
import withHideable from '../components/withHideable';
import Flashcard from '@/components/Flashcard';

const HideableIconButton = withHideable(IconButton);
const HideableTypography = withHideable(Typography);

const FlashcardScreen = () => {
    const {
        currentCard,
        currentIndex,
        numCards,
        goNext,
        goPrevious,
    } = useFlashcardContext();

    if(currentCard === null) {
        return null;
    }

  return (
    <Stack spacing={2} paddingTop={10} alignItems="center">
          <Flashcard key={currentIndex}
              frontText={currentCard.question}
              frontImage={currentCard.image}
              backText={currentCard.answer}
          />

          <Stack maxWidth="sm" sx={{ width: "100%" }} direction="row" alignItems="center" justifyContent="space-evenly" >
              <HideableIconButton
                  visible={currentIndex === 0 ? false : true}
                  onClick={goPrevious}
              >
                  <ArrowBackRoundedIcon sx={{ fontSize: 45 }} />
              </HideableIconButton>

              <HideableTypography
                  visible={currentIndex < numCards ? true : false}
              >
                  {`${currentIndex + 1} / ${numCards}`}
              </HideableTypography>

              <HideableIconButton
                    visible={currentIndex === numCards - 1 ? false : true}
                    onClick={goNext}
                >
                    <ArrowForwardRoundedIcon sx={{ fontSize: 45 }} />
                </HideableIconButton>
            </Stack>
        </Stack>
    );
}

export default FlashcardScreen;
