import Alert from "@mui/material/Alert/Alert";
import Snackbar from "@mui/material/Snackbar/Snackbar";
import { memo, useEffect, useState} from "react";

export const SnackBar = memo(({type, message, show}) => {
    const [open, setOpen] = useState(false);

    useEffect(()=>{
        setOpen(show)
    }, [show])

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return
        setOpen(false)
    };

    return (
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={type} variant='filled'>
                {message}
            </Alert>
        </Snackbar>
    );
})