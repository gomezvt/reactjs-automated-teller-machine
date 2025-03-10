import React, { useState } from "react";
import { makeStyles } from 'tss-react/mui';
import { Grid2 } from '@mui/material';
import ccSprite from "../assets/creditcard_sprite.png";
import AtmButton from './atm-button';
import stickerGraffiti from "../assets/sticker_graf.png";
import systemsLabel from "../assets/systems.png";

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
    atmOptionTrackStyle: {
        height: "3.5px",
        width: "13px",
        backgroundColor: "white",
        display: "inline-block",
    },
    screenStyle: {
        textAlign: "center",
        color: "white",
        backgroundColor: "#7eb4d5",
        width: "235px",
        height: "210px",
    },
    screenBgStyle: {
        padding: "5px 0 5px 5px",
        ustifyItems: "center",
        backgroundColor: "lightgray",
        width: "240px",
        minHeight: "210px"
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
        height: "210px",
        backgroundColor: "orange"

    },
    leftButtonStyle: {
        justifyContent: "end",
        flexDirection: "column",
        height: "210px",
        backgroundColor: "yellow"
    },
    optionContainer: {
        justifyContent: "end",
        flexDirection: "column",
        height: "190px",
        backgroundColor: "red"
    },
    rightOptionStyle: {
        height: "30px",
        justifyContent: "end",
        backgroundColor: "purple"
    },
    systemsLabelStyle: {
        position: "absolute",
        margin: "10px 0 0 185px",

    }
}));

const ScreenView = () => {
    const { classes } = useStyles();
    const [welcomeMsg, setWelcomeMsg] = useState("Welcome to the ATM");
    const [didPinIn, setDidPinIn] = useState();
    return (
        <Grid2 className={classes.screenLayoutStyle} container>
            <Grid2 style={{ width: "100%", justifyItems: "center" }}>
                <div className={classes.atmSignShadowStyle} />
                <div>
                    <img src={ccSprite} alt="ccSprite" style={{ padding: "15px 0 0 0" }} />
                </div>
            </Grid2>
            <Grid2 container style={{ height: "100%" }}>
                <Grid2>
                    {displayLeftButtonView(classes)}
                </Grid2>
                <Grid2>
                    {displayScreenView(didPinIn, welcomeMsg, classes)}
                </Grid2>
                <Grid2>
                    {displayRightButtonView(classes)}
                </Grid2>
            </Grid2>
        </Grid2>
    );
}

const displayInitialOptions = (welcomeMsg, classes) => {
    return <Grid2>
        <Grid2 style={{ position: "relative", width: "100%" }}>
            {welcomeMsg}
        </Grid2>
        <Grid2 className={classes.optionContainer} container>
            <Grid2 className={classes.rightOptionStyle} container>
                <Grid2 style={{ alignContent: "center" }}>
                    Enter PIN
                </Grid2>
                <Grid2 style={{ alignContent: "center", margin: "-5px 0 0 0" }}>
                    <div className={classes.atmOptionTrackStyle} />
                </Grid2>
            </Grid2>
        </Grid2>
    </Grid2>
}

const displayUserOptions = () => {

}

const displayLeftButtonView = (classes) => {
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

const displayScreenView = (didPinIn, welcomeMsg, classes) => {
    return <Grid2>
        <div className={classes.screenBgStyle}>
            <div className={classes.screenStyle}>
                {!didPinIn ? displayInitialOptions(welcomeMsg, classes) : displayUserOptions(classes)}
            </div>
            <img src={stickerGraffiti} alt="stickerGraffiti" className={classes.stickerGraffitiStyle} />
            <img src={systemsLabel} alt="systemsLabel" className={classes.systemsLabelStyle} />
        </div>
    </Grid2>
}

const displayRightButtonView = (classes) => {
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

export default ScreenView;