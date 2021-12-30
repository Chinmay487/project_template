import React from 'react';
import { Dialog, DialogActions, DialogTitle, Typography, Button, Box, IconButton,TextField,Select,MenuItem } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import CloseIcon from '@mui/icons-material/Close';



const AuthForm = (props) => {

    const googleButtonStyle = {
        color: "#F5F5F5",
        backgroundColor : "#FF5252",
        "&:hover": {
            backgroundColor: "#FF5252"
        }
    }
    return (
        <>
            <Dialog fullWidth open={props.dialogOpen} onClose={props.handleDialogClose} >
                <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }} ><DialogTitle>Sign in </DialogTitle> <IconButton onClick={props.handleDialogClose} ><CloseIcon /></IconButton> </Box>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", my: "1rem" }} >
                    <Typography variant="h6">Welcome to ShopHeaven</Typography>
                </Box>
                <DialogActions sx={{ height: "100%", display: "flex", flexDirection: "column" }} >
                    <Button variant='contained' sx={googleButtonStyle}> <GoogleIcon /> &nbsp;Login with Google  </Button>
                </DialogActions>
                <Box sx={{ width: "100%",padding:{sm:"1%",xs:"1%"}, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", my: "1rem" }} >
                    <Typography sx={{my:"1rem"}}>OR</Typography>
                    <Typography variant="h6" sx={{mb:"1rem"}} >Join us with mobile number and OTP</Typography>
                {/* </Box>
                <Box sx={{width:"100%",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",my:"1rem"}}> */}
                    <Box sx={{display:"flex",width:"100%",justifyContent:"center",alignItems:"center"}} >
                    {/* <Select variant="outlined" value={+91} autoWidth sx={{width:"15%"}} >
                        <MenuItem selected>+91</MenuItem>
                        <MenuItem>+91</MenuItem>
                        <MenuItem>+91</MenuItem>
                        <MenuItem>+91</MenuItem>
                    </Select> */}
                    {/* <Box sx={{height:"1.5rem"}} component="select" sx={{ fontSize: "2.4rem" }} >
                        <Box component="option" selected >+91</Box>
                        <Box component="option">+91</Box>
                        <Box component="option">+91</Box>
                        <Box component="option">+91</Box>
                        <Box component="option">+91</Box>
                        <Box component="option">+91</Box>
                    </Box> */}
                    <Typography sx={{fontSize:"1.5rem",mx:"0.5rem"}} >+91</Typography>
                    <TextField  variant="outlined" label="Contact Number" required={true} />
                    </Box>
                    <TextField sx={{my:"0.5rem"}} variant="outlined" label="OTP" required={true} />
                    <Button sx={{my:"1rem"}}   variant="contained">Send OTP</Button>
                </Box>
            </Dialog>
        </>
    )
}

export default AuthForm;