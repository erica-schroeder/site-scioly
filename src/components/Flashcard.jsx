import { Card, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import '../styles/flashcard.css';
import { FlashcardContent } from './FlashcardContent';
import { resolveImage } from '@/util/resolveImage';

function Flashcard({ frontText, frontImage, backText }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        resolveImage(frontImage).then(setImageSrc);
    }, frontImage);


    return (
        <div
            className={`flashcard ${isFlipped ? "flipped" : ""}`}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className="flashcard-inner" >
                <Card className="flashcard-front">
                    <FlashcardContent header="Question">
                            <Stack spacing={3} justifyContent="center" sx={{ flex: 1 }}>
                                {imageSrc &&
                                    <img src={imageSrc} alt="" />
                                }

                                <Typography textAlign="center" whiteSpace="pre-wrap">
                                    {frontText}
                                </Typography>
                        </Stack>

                    </FlashcardContent>
                </Card>

                <Card className="flashcard-back">
                    <FlashcardContent header="Answer" headerAlign="right">
                        <Stack justifyContent="center" alignItems="center" sx={{ flex: 1 }}>
                            <Typography textAlign="center" whiteSpace="pre-wrap">
                                {backText}
                            </Typography>
                        </Stack>
                    </FlashcardContent>
                </Card>
            </div>
        </div>
    );
}

export default Flashcard;
