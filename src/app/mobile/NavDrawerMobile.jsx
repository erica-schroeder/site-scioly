import { Drawer } from "@mui/material"

export const NavDrawerMobile = ({ width, ...props }) => {

  return (
    <Drawer
      variant="temporary"
      sx={{
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: width,
        },
      }}
      slotProps={{
        root: {
          keepMounted: true, // Better open performance on mobile.
        },
      }}
      {...props}
    />
  );
};