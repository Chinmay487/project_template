import React,{useState} from 'react';
import {Drawer,List,ListItem,ListItemIcon} from '@mui/material';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import {useNavigate} from 'react-router-dom';


const Sidenav = (props) => {

    let uid = props.uid

    const navigate = useNavigate();

    const drawerStyle = {
        width: 300,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: 200,
            boxSizing: 'border-box',
        },
    }

    const onClickEvent = (url)=>{
        navigate(url)
        props.setDrawerStatus(!props.drawerStatus);
    }


    return (
        <Drawer open={props.drawerStatus} onClose={onClickEvent} variant="temporary" anchor="left" elevation={5} sx={drawerStyle} >
                
            <List sx={{marginTop : "3rem"}} >
                <ListItem divider button onClick={()=>{
                    props.setDrawerStatus(!props.drawerStatus)
                }}> 
                    <MenuOpenOutlinedIcon/>
                </ListItem>
                <ListItem divider button onClick={()=>{
                    navigate('/')
                    props.setDrawerStatus(!props.drawerStatus)

                }} sx={{textAlign : "center"}}>
                    <ListItemIcon>
                        Homepage
                    </ListItemIcon>
                </ListItem>
                {props.items.map((item)=>{
                    return (<ListItem  onClick={item.handleList} key={uid++} divider button  sx={{textAlign : "center"}}>
                                <ListItemIcon>
                                {
                                    !item.menuStatus ? item.title : <List>

                                        <ListItem  button onClick={item.handleList}> 
                                            {item.title}

                                        </ListItem>

                                    {item.list.map((listItem)=>{
                                        const url = `/categories/${item.title.toLowerCase().replace(/ /g, "")}/${listItem.toLowerCase().replace(/ /g, "")}`
                                        return (

                                            <ListItem button onClick={()=>{
                                                onClickEvent(url)
                                            }}>
                                                {listItem}
                                            </ListItem>
                                        )
                                    })}
                                </List>
                                }                                    
                                </ListItemIcon>

                            </ListItem>)
                })}
            </List>
        </Drawer>
    )
}

// /categories/${props.parent.toLowerCase().replace(/ /g, "")}/${item.toLowerCase().replace(/ /g, "")}
export default Sidenav;

