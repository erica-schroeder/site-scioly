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
                    width: '100%',
                    maxWidth: 'md',
                    mx: 'auto',
                }}>
                <Typography variant="h4" sx={{ alignSelf: 'flex-start' }}>
                    {selectedEvent?.displayName} Flashcards
                </Typography>

                <Divider sx={{borderColor: 'primary.main', width: '100%', my: 2, mb: 4 }}/>

                <Typography sx={{ mb: 3 }}>
                    Select the sets you want to include, then press start!
                </Typography>

                <Grid container spacing={3} justifyContent="center">
                    {selectedEvent.groups.map((group) => (
                        <Grid size={{ xs: 6, sm: 3 }} sx={{ minWidth: 240, maxWidth: 300 }}>
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
