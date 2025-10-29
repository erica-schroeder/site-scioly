import { NavigationList } from '@/app/NavigationList';
import { Box, Stack } from '@mui/material';
import * as React from 'react';
import { AppBarMobile } from './AppBarMobile';
import { NavDrawerMobile } from './NavDrawerMobile';

const drawerWidth = 240;

export const AppFrameMobile = ({ children }) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    return (
        <Stack sx={{ display: 'flex' }}>
            <AppBarMobile onDrawerToggle={handleDrawerToggle} />
            <Stack direction="row">
                <NavDrawerMobile
                    width={drawerWidth}
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                >
                    <NavigationList onNavigate={handleDrawerClose} />

                </NavDrawerMobile>
                <Box sx={{ flexGrow: 1, p: 3 }}>
                    {children}
                </Box>
            </Stack>
        </Stack>
    );
};
