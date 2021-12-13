import React from 'react';
import {Drawer,List,ListItem,ListItemIcon,Collapse} from '@mui/material';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import {useNavigate} from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

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

    const closeUnused = (index) => {
        for(let i=0;i<props.items.length;i++){
            if(i !== index && props.items[i].status===true){
                props.items[i].handleList()
            }                       
        }
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
                {props.items.map((item,index)=>{
                    // console.log(props.items.length);
                    return (
                        <>
                            <ListItem  onClick={()=>{
                                item.handleList()
                                closeUnused(index)
                            }} key={uid++} divider button  sx={{textAlign : "center"}}>
                                         <ListItemIcon >{item.title} {!item.status ? <ExpandMore/> : <ExpandLess/>} </ListItemIcon>         
                            </ListItem> 
                            <Collapse in={item.status} imeout="auto">
                                     <List>
                                        {item.list.map((listItem)=>{
                                            const url = `/categories/${item.title.toLowerCase().replace(/ /g, "")}/${listItem.toLowerCase().replace(/ /g, "")}`
                                            return (

                                                <ListItem button onClick={()=>{
                                                    item.handleList()
                                                    onClickEvent(url)
                                                }}>
                                                    {listItem}
                                                </ListItem>
                                            )
                                        })}
                                    </List>
                                </Collapse>
                        </>
                    )

                })}
            </List>
        </Drawer>
    )
}

// /categories/${props.parent.toLowerCase().replace(/ /g, "")}/${item.toLowerCase().replace(/ /g, "")}
export default Sidenav;

