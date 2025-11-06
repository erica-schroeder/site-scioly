import logo from "@/assets/romeo-scioly-logo-dark.svg";
import { Box } from "@mui/material";
import type React from "react";
import { useNavigate } from "react-router";

export const ClickableLogo: React.FC = () => {
    const navigate = useNavigate();
    return (
        <Box
            component="img"
            src={logo}
            alt="Logo"
            onClick={() => navigate("/")}
            sx={{
                maxHeight: 100,
                maxWidth: "100%",
                cursor: 'pointer',
                py: 1,
            }}
        />
    );
};