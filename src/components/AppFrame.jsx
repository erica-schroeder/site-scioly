import { NavigationList } from '@/app/NavigationList';
import logo from "@/assets/romeo-scioly-logo.svg";
import MenuIcon from '@mui/icons-material/Menu';
import { Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';

const drawerWidth = 240;
const appBarHeight = 80;

function AppFrame({ children }) {
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
      <AppBar position="static" sx={{ height: appBarHeight }}>
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="img"
            src={logo}
            //alt="Congratulations!"
            sx={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              maxHeight: 100,
              objectFit: "contain", // preserves aspect ratio
              padding: 2,
            }}
          />
        </Toolbar>
      </AppBar>
      <Stack direction="row">
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
                top: `${appBarHeight}px`,  // start below AppBar
                height: `calc(100vh - ${appBarHeight}px)`, // fill remaining space
              },
            }}
            slotProps={{
              root: {
              keepMounted: true, // Better open performance on mobile.
            },
          }}
        >
          <NavigationList />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
                top: `${appBarHeight}px`,  // start below AppBar
                height: `calc(100vh - ${appBarHeight}px)`, // fill remaining space
            },
          }}
          open
        >
          <NavigationList />
        </Drawer>
      </Box>
      <Stack sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Stack>
</Stack>
    </Stack>
  );
}

export default AppFrame;
