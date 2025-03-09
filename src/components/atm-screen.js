import { makeStyles } from 'tss-react/mui';
import { Grid2 } from '@mui/material';
import ccSprite from "../assets/creditcard_sprite.png";
import AtmButton from './atm-button';
import stickerGraffiti from "../assets/sticker_graf.png";

const useStyles = makeStyles()((theme) => ({
    atmSignShadowStyle: {
        backgroundColor: "lightgray",
        height: "0.5em",
        padding: 0,
        width: "100%",
        textAlign: "center"
    },
    atmButtonTrackStyle: {
        height: "3px",
        width: "13px",
        backgroundColor: "gray",
        display: "inline-block"
    },
    screenStyle: {
        textAlign: "center",
        color: "white",
        backgroundColor: "#7eb4d5",
        width: "235px",
        height: "240px"
    },
    screenBgStyle: {
        padding: "5px 0 5px 5px",
        ustifyItems: "center",
        backgroundColor: "lightgray",
        width: "240px",
        minHeight: "240px"
    },
    screenLayoutStyle: {
        padding: 0,
        background: "white",
        justifyContent: "center",
        width: "65%",
        height: "100vh"
    },
    stickerGraffitiStyle: {
        position: "absolute",
        margin: "-10px 0 0 -45px"
    },
    rightButtonStyle: {
        justifyContent: "end",
        flexDirection: "column",
        height: "240px"
    },
    leftButtonStyle: {
        justifyContent: "end",
        flexDirection: "column",
        height: "240px"
    }
}));

const displayLeftButtons = (classes) => {
    return <Grid2 className={classes.leftButtonStyle} container spacing={1}>
        <Grid2 style={{ textAlign: "right" }}>
            <AtmButton />
            <div className={classes.atmButtonTrackStyle} />
        </Grid2>
        <Grid2 style={{ textAlign: "right" }}>
            <AtmButton />
            <div className={classes.atmButtonTrackStyle} />
        </Grid2>
        <Grid2 style={{ textAlign: "right" }}>
            <AtmButton />
            <div className={classes.atmButtonTrackStyle} />
        </Grid2>
        <Grid2 style={{ textAlign: "right" }}>
            <AtmButton />
            <div className={classes.atmButtonTrackStyle} />
        </Grid2>
    </Grid2>
}

const displayScreen = (classes) => {
    return <Grid2>
        <div className={classes.screenBgStyle}>
            <div className={classes.screenStyle}>
                Hi Peter Parker!
                <p>Please make a choice...</p>
            </div>
            <img src={stickerGraffiti} alt="stickerGraffiti" className={classes.stickerGraffitiStyle} />
        </div>
    </Grid2>
}

const displayRightButtons = (classes) => {
    return <Grid2 className={classes.rightButtonStyle} container spacing={1}>
        <Grid2>
            <div className={classes.atmButtonTrackStyle} />
            <AtmButton />
        </Grid2>
        <Grid2>
            <div className={classes.atmButtonTrackStyle} />
            <AtmButton />
        </Grid2>
        <Grid2>
            <div className={classes.atmButtonTrackStyle} />
            <AtmButton />
        </Grid2>
        <Grid2>
            <div className={classes.atmButtonTrackStyle} />
            <AtmButton />
        </Grid2>
    </Grid2>
}

function ScreenView() {
    const { classes } = useStyles();
    return (
        <Grid2 className={classes.screenLayoutStyle} container>
            <Grid2 style={{ width: "100%", justifyItems: "center" }}>
                <div className={classes.atmSignShadowStyle} />
                <div>
                    <img src={ccSprite} alt="ccSprite" style={{ padding: "15px 0 0 0" }} />
                </div>
            </Grid2>
            <Grid2 container style={{ height: "100%" }}>
                {displayLeftButtons(classes)}
                {displayScreen(classes)}
                {displayRightButtons(classes)}
            </Grid2>
        </Grid2>
    );
}

export default ScreenView;