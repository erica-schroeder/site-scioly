import { useEventContext } from '@/contexts/EventContext';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import GroupSelector from './GroupSelector';
import { Link, useParams } from 'react-router';
import { useFlashcardContext } from '@/contexts/FlashcardContext';

export function SelectFlashcardsPage() {
    const [selectedSets, setSelectedSets] = useState([]);
    const { events } = useEventContext();
    const { loadAndShuffleSets } = useFlashcardContext();
    const { eventKey } = useParams();

    const event = events[eventKey];
    const groups = event.groups || {};

    return (
        <Stack>
            <Typography variant="h4" gutterBottom>
                {event.meta?.displayName}
            </Typography>

            {Object.entries(groups).map(([groupName, group]) => (
                <GroupSelector
                    key={groupName}
                    name={groupName}
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
