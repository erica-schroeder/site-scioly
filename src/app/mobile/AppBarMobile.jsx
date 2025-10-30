import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import logo from "@/assets/romeo-scioly-logo.svg";
import MenuIcon from '@mui/icons-material/Menu';

export const AppBarMobile = ({ onDrawerToggle }) => {
    return (
        <AppBar>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={onDrawerToggle}
                >
                    <MenuIcon fontSize="large"/>
                </IconButton>
                <Box
                    component="img"
                    src={logo}
                    alt="Logo"
                    sx={{
                        maxHeight: 100,
                        objectFit: "contain", // preserves aspect ratio
                        padding: 2,
                    }}
                />
                <Box sx={{ width: '2.1875rem' }} />
            </Toolbar>
        </AppBar>
    );
};