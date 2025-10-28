import { Box } from "@mui/material";

const HideableComponent = ({ visible, ...props }) => {
    return (
        <Box
            sx={{
                opacity: visible ? 1 : 0,
                pointerEvents: visible ? 'auto' : 'none'
            }}

            {...props}
        />
    );
};

export default HideableComponent;