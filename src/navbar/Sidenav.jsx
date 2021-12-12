import React from 'react';
import {Drawer,List,ListItem,ListItemIcon} from '@mui/material';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';


const Sidenav = (props) => {

    let uid = props.uid

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
            
                
            <List sx={{marginTop : "3rem"}} >
                <ListItem divider button onClick={onClickEvent}> 
                    <MenuOpenOutlinedIcon/>
                 </ListItem>
                <ListItem divider button onClick={onClickEvent} sx={{textAlign : "center"}}>
                    <ListItemIcon>
                        Homepage
                    </ListItemIcon>
                </ListItem>
                {props.items.map((item)=>{
                    return (<ListItem key={uid++} divider button onClick={onClickEvent} sx={{textAlign : "center"}}>
                                <ListItemIcon>
                                    {item.title}
                                </ListItemIcon>
                            </ListItem>)
                })}
            </List>
        </Drawer>
    )
}


export default Sidenav;

