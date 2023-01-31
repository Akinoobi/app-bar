import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Tooltip } from '@mui/material';

export const DefaultLayout = (props) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                App Bar
              </Typography>
              <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://scontent.fceb5-1.fna.fbcdn.net/v/t39.30808-6/277676622_5409945225693801_7541088983685635602_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGJEKaDMQ7CGLbQ9lQTWUPPFaOOAqrcpMgVo44CqtykyFEm2DyMeaXh5NvOhdXhH3thDZtCQ3b5q2r1d4cxun2G&_nc_ohc=HHDmazRAtC8AX9tCcR0&_nc_ht=scontent.fceb5-1.fna&oh=00_AfCFpnnFI4T6HGoj48IkKZDkFl6yNDg5Gnfa78-dnEttDw&oe=63DCAE42" />
              </IconButton>
            </Tooltip>
            </Toolbar>
          </AppBar>
        </Box>
      );
}