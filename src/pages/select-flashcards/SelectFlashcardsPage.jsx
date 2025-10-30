import { useEventContext } from '@/contexts/EventContext';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import GroupSelector from './GroupSelector';
import { Link, useParams } from 'react-router';
import { useFlashcardContext } from '@/contexts/FlashcardContext';

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
            <Typography variant="h4" gutterBottom>
                {selectedEvent?.displayName}
            </Typography>

            {selectedEvent.groups.map((group) => (
                <GroupSelector
                    key={group.key}
                    name={group.displayName}
                    group={group}
                    selectedSets={selectedSets}
                    onChange={setSelectedSets}
                />
            ))}

            {/* Optional summary / next button */}
            {selectedSets.length > 0 && (
                <Box sx={{ mt: 4 }}>
                    <Typography variant="subtitle1">
                        Selected sets: {selectedSets.join(', ')}
                    </Typography>
                </Box>
            )}


            <Button
                variant='contained'
                disableElevation
                disabled={selectedSets.length < 1}
                component={Link}
                onClick={() => loadAndShuffleSets(selectedSets)}
                to={`/flashcards`}
            >
                Start!
            </Button>
        </Stack>
    );
}
