import { Box, Button, Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import { Link } from 'react-router';
import '../styles/flashcard.css';
import congratsGif from "@/assets/images/congrats.gif";
import { FlashcardContent } from './FlashcardContent';
import { useEventContext } from '@/contexts/EventContext';

function CongratsCard() {
    const { selectedEventKey } = useEventContext();

    return (
        <div className="flashcard" >
            <div className="flashcard-inner" >
                <Card className="flashcard-front" sx={{
                    borderRadius: 3,
                    p: 2,
                }}>
                    <FlashcardContent header="Finished!">
                        <Stack spacing={3} justifyContent={"space-between"} sx={{ flex: 1, width: '100%', pt: 2 }}>
                            <Box
                                component="img"
                                src={congratsGif}
                                alt="Congratulations!"
                                sx={{
                                    objectFit: "contain", // preserves aspect ratio
                                    borderRadius: "8px",
                                    backgroundColor: 'white',
                                }}
                            />

                            <Typography textAlign="center">
                                Amazing work!!!
                            </Typography>

                            <Divider />

                            <Button variant="contained" disableElevation component={Link} to={selectedEventKey ? `/events/${selectedEventKey}` : "/"}>
                                Pick a new set
                            </Button>
                        </Stack>
                    </FlashcardContent>
                </Card>
            </div>
        </div>
    );
}

export default CongratsCard;
