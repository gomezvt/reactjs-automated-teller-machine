import { Button } from '@mui/material';
import atmButton from "../assets/atm-button.png";
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    buttonStyle: {
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        minHeight: "25px", 
        minWidth: "40px", 
        backgroundImage: `url(${atmButton})`
    }
}));

function AtmButton() {
    const { classes } = useStyles();
    return <Button className={classes.buttonStyle} />
}

export default AtmButton;