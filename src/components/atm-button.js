import { Button } from '@mui/material';
import atmButton from "../assets/atm-button.png";

function AtmButton() {
    return <Button style={{
        backgroundSize: 'cover', backgroundPosition: 'center', minHeight: "25px", minWidth: "40px", backgroundImage: `url(${atmButton})`
    }} />
}

export default AtmButton;