import React from 'react';
import {Drawer,List,ListItem,ListItemIcon} from '@mui/material';

const Sidenav = () => {

    const drawerStyle = {
        width: 300,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: 200,
            boxSizing: 'border-box',
        },
    }


    return (
        <Drawer open={false} variant="temporary" anchor="left" elevation={5} sx={drawerStyle} >
            <List >
                <ListItem divider button>
                    <ListItemIcon>
                        Homepage
                    </ListItemIcon>
                </ListItem>
                <ListItem divider button>
                    <ListItemIcon>
                        Homepage
                    </ListItemIcon>
                </ListItem>
                <ListItem divider button>
                    <ListItemIcon>
                        Homepage
                    </ListItemIcon>
                </ListItem>
                <ListItem divider button>
                    <ListItemIcon>
                        Homepage
                    </ListItemIcon>
                </ListItem>
            </List>
        </Drawer>
    )
}


export default Sidenav;

