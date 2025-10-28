import { CardContent, Stack, Typography, Divider } from "@mui/material";

export const FlashcardContent = ({ header, headerAlign = "left", children }) => (
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