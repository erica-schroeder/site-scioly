import '@/styles/flashcard.css';
import { Card, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { FlashcardContent } from './FlashcardContent';

export const Flashcard = ({ frontText, frontImageUrl, backText }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`flashcard ${isFlipped ? 'flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className='flashcard-inner'>
        <Card
          className='flashcard-front'
          sx={{
            p: 2,
            borderRadius: 3,
            backgroundColor: 'white',
          }}
        >
          <FlashcardContent header='Question'>
            <Stack spacing={3} justifyContent='center' sx={{ mt: -2, flex: 1 }}>
              {frontImageUrl && <img src={frontImageUrl} alt='' />}

              <Typography textAlign='center' whiteSpace='pre-wrap'>
                {frontText}
              </Typography>
            </Stack>
          </FlashcardContent>
        </Card>

        <Card
          className='flashcard-back'
          sx={{
            p: 2,
            borderRadius: 3,
            backgroundColor: 'white',
          }}
        >
          <FlashcardContent header='Answer' headerAlign='right'>
            <Stack
              justifyContent='center'
              alignItems='center'
              sx={{ mt: -2, flex: 1 }}
            >
              <Typography textAlign='center' whiteSpace='pre-wrap'>
                {backText}
              </Typography>
            </Stack>
          </FlashcardContent>
        </Card>
      </div>
    </div>
  );
};
