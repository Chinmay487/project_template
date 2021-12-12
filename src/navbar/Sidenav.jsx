import React from 'react';
import {Drawer,List,ListItem,ListItemIcon, IconButton} from '@mui/material';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';


const Sidenav = (props) => {

    const drawerStyle = {
        width: 300,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: 200,
            boxSizing: 'border-box',
        },
    }

    const onClickEvent = ()=>{
        props.setDrawerStatus(!props.drawerStatus);
    }


    return (
        <Drawer open={props.drawerStatus} onClose={onClickEvent} variant="temporary" anchor="left"   elevation={5} sx={drawerStyle} >
            <IconButton onClick={onClickEvent} >
                <MenuOpenOutlinedIcon/>
            </IconButton>
            <List >
                <ListItem divider button onClick={onClickEvent}>
                    <ListItemIcon>
                        Homepage
                    </ListItemIcon>
                </ListItem>
                <ListItem divider button onClick={onClickEvent} >
                    <ListItemIcon>
                        Homepage
                    </ListItemIcon>
                </ListItem>
                <ListItem divider button onClick={onClickEvent} >
                    <ListItemIcon>
                        Homepage
                    </ListItemIcon>
                </ListItem>
                <ListItem divider button onClick={onClickEvent} >
                    <ListItemIcon>
                        Homepage
                    </ListItemIcon>
                </ListItem>
            </List>
        </Drawer>
    )
}


export default Sidenav;

