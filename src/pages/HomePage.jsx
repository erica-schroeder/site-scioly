import { Stack, Typography } from "@mui/material";

export const HomePage = () => {
    return (
        <Stack spacing={3} alignItems="center">
            <Typography variant="h4">Welcome to Romeo Science Olympiad Flashcards!</Typography>
            <Typography variant="h5">Select your event from the navigation menu to begin.</Typography>
            <Typography variant="h5">Happy studying!</Typography>
        </Stack>
    );
}