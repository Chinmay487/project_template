import React,{useState} from 'react';
import {Drawer,List,ListItem,ListItemIcon,Box} from '@mui/material';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import {Link} from 'react-router-dom';


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
        <Drawer open={props.drawerStatus} onClose={onClickEvent} variant="temporary" anchor="left" elevation={5} sx={drawerStyle} >
            
                
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
                    return (<ListItem key={uid++} divider button  sx={{textAlign : "center"}}>
                                <ListItemIcon>
                                    {item.title}
                                    <List>
                                        {item.list.map((listItem)=>{
                                            return (
                                                <ListItem button onClick={onClickEvent}>
                                                    <Link className="link" to="">{listItem}</Link>
                                                </ListItem>
                                            )
                                        })}
                                    </List>
                                </ListItemIcon>

                            </ListItem>)
                })}
            </List>
        </Drawer>
    )
}


export default Sidenav;

