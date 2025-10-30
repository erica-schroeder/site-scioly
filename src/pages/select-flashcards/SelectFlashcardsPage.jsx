import { useEventContext } from '@/contexts/EventContext';
import { useFlashcardContext } from '@/contexts/FlashcardContext';
import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import GroupSelector from './GroupSelector';

export function SelectFlashcardsPage() {
    const { eventKey } = useParams();
    const { setSelectedEventKey, selectedEvent } = useEventContext();
    const [selectedSets, setSelectedSets] = useState([]);
    const { loadAndShuffleSets } = useFlashcardContext();

    useEffect(() => {
        setSelectedEventKey(eventKey);
    }, [eventKey, setSelectedEventKey]);

    return (
        <Stack>
            <Stack
                alignItems="center"
                sx={{
                    flex: 1,
                    overflowY: 'auto',
                    maxWidth: 'xl',
                    mx: 'auto',
                }}>
                <Typography variant="h4">
                    {selectedEvent?.displayName} Flashcards
                </Typography>

                <Divider sx={{borderColor: 'primary.main', width: '100%', my: 2, mb: 4 }}/>

                <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="center">
                    {selectedEvent.groups.map((group) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} sx={{ minWidth: 225, maxWidth: 300 }}>
                            <GroupSelector
                                key={group.key}
                                name={group.displayName}
                                group={group}
                                selectedSets={selectedSets}
                                onChange={setSelectedSets}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Stack>

            <Box
                sx={{
                    position: 'sticky',
                    bottom: 0,
                    zIndex: 10,
                    mt: 2,
                    p: 2,
                    display: 'flex',
                    justifyContent: 'center', // centers horizontally
                }}
            >
                <Button
                    variant='start'
                    disableElevation
                    disabled={selectedSets.length < 1}
                    component={Link}
                    onClick={() => loadAndShuffleSets(selectedSets)}
                    to={`/flashcards`}
                >
                    Start!
                </Button>
            </Box>
        </Stack>
    );
}
