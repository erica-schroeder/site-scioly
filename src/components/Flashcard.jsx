import { Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import '../styles/flashcard.css';

function Flashcard({ frontText, frontImage, backText }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const FlashcardContent = ({ header, headerAlign="left", children }) => (
        <CardContent sx={{ height: '100%' }}>
            <Stack sx={{ height: '100%' }}>
                <Typography variant="h6" textAlign={headerAlign} sx={{ mb: 1 }}>
                    {header}
                </Typography>
                <Divider />
                {children}
            </Stack>
        </CardContent>
    );

    return (
        <div
            className={`flashcard ${isFlipped ? "flipped" : ""}`}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className="flashcard-inner" >
                <Card className="flashcard-front" variant="outlined">
                    <FlashcardContent header="Question">
                            <Stack spacing={3} justifyContent="center" sx={{ flex: 1 }}>
                                {frontImage &&
                                    <img src={frontImage} alt="" />
                                }

                                <Typography textAlign="center" whiteSpace="pre-wrap">
                                    {frontText}
                                </Typography>
                        </Stack>

                    </FlashcardContent>
                </Card>

                <Card className="flashcard-back" variant="outlined">
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
