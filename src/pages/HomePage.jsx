import { Stack, Typography } from '@mui/material';

export const HomePage = () => {
  return (
    <Stack spacing={3} alignItems='center'>
      <Typography textAlign='center' variant='h5' fontWeight='bold'>
        Welcome to Romeo Science Olympiad Flashcards!
      </Typography>
      <Typography textAlign='center' variant='h6'>
        Select your event from the navigation menu to begin.
      </Typography>
      <Typography textAlign='center' variant='h6'>
        Happy studying!
      </Typography>
    </Stack>
  );
};
