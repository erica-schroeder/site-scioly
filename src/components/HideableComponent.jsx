import { Box } from '@mui/material';

export const HideableComponent = ({ visible, ...props }) => {
  return (
    <Box
      sx={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
      }}
      {...props}
    />
  );
};
