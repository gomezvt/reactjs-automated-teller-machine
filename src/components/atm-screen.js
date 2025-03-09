import { makeStyles } from 'tss-react/mui';
import { Grid2 } from '@mui/material';
import ccSprite from "../assets/creditcard_sprite.png";
import AtmButton from './atm-button';

const useStyles = makeStyles()((theme) => ({
    atmSignShadow: {
        backgroundColor: "lightgray",
        height: "0.5em",
        padding: 0,
        width: "100%",
        textAlign: "center"
    },
    screen: {
        backgroundColor: "lightgray",
    }
}));

const displayLeftButtons = () => {
    return <Grid2 style={{ flexDirection: "column", backgroundColor: "yellow", height: "260px" }} container spacing={1}>
        <Grid2 style={{ textAlign: "right" }}>
            <AtmButton />
            <div style={{ height: "3px", width: "13px", backgroundColor: "gray", display: "inline-block" }} />
        </Grid2>
        <Grid2 style={{ textAlign: "right" }}>
            <AtmButton />
            <div style={{ height: "3px", width: "13px", backgroundColor: "gray", display: "inline-block" }} />
        </Grid2>
        <Grid2 style={{ textAlign: "right" }}>
            <AtmButton />
            <div style={{ height: "3px", width: "13px", backgroundColor: "gray", display: "inline-block" }} />
        </Grid2>
        <Grid2 style={{ textAlign: "right" }}>
            <AtmButton />
            <div style={{ height: "3px", width: "13px", backgroundColor: "gray", display: "inline-block" }} />
        </Grid2>
    </Grid2>
}

const displayScreen = () => {
    return <Grid2>
        <div style={{ padding: "5px 0 5px 0", justifyItems: "center", backgroundColor: "lightgray", width: "245px", minHeight: "250px" }}>
            <div style={{ backgroundColor: "#7eb4d5", width: "235px" }}>
                test
            </div>
        </div>
    </Grid2>
}

const displayRightButtons = () => {
    return <Grid2 style={{ flexDirection: "column", height: "260px", backgroundColor: "green" }} container spacing={1}>
        <Grid2>
            <div style={{ height: "3px", width: "13px", backgroundColor: "gray", display: "inline-block" }} />
            <AtmButton />
        </Grid2>
        <Grid2>
            <div style={{ height: "3px", width: "13px", backgroundColor: "gray", display: "inline-block" }} />
            <AtmButton />
        </Grid2>
        <Grid2>
            <div style={{ height: "3px", width: "13px", backgroundColor: "gray", display: "inline-block" }} />
            <AtmButton />
        </Grid2>
        <Grid2>
            <div style={{ height: "3px", width: "13px", backgroundColor: "gray", display: "inline-block" }} />
            <AtmButton />
        </Grid2>
    </Grid2>
}

function ScreenView() {
    const { classes } = useStyles();
    return (
        <Grid2 style={{ padding: 0, background: "white", justifyContent: "center", width: "65%", height: "100vh" }} container>
            <Grid2 style={{ width: "100%", justifyItems: "center" }}>
                <div className={classes.atmSignShadow} />
                <div>
                    <img src={ccSprite} alt="ccSprite" style={{ padding: "15px 0 0 0" }} />
                </div>
            </Grid2>
            <Grid2 container style={{ height: "100%" }}>
                {displayLeftButtons()}
                {displayScreen()}
                {displayRightButtons()}
            </Grid2>
        </Grid2>
    );
}

export default ScreenView;