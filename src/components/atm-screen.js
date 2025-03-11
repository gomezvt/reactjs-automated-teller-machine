import React, { useState, useEffect, use } from "react";
import { Grid2, Button, TextField } from '@mui/material';
import ccDefaultSprite from "../assets/default_creditcard_sprite.png";
import ccSelectedSprite from "../assets/selected_creditcard_sprite.png";
import stickerGraffiti from "../assets/sticker_graf.png";
import systemsLabel from "../assets/systems.png";
import { useStyles } from "./atm-styles";

const ScreenView = () => {

    const { classes } = useStyles();
    const [welcomeMsg, setWelcomeMsg] = useState("Welcome to the ATM");
    const [isPinValid, setisPinValid] = useState(false);
    const [didClickEnterPinBtn, setDidClickEnterPinBtn] = useState(false);
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
    const [creditCardSprite, setCreditCardSprite] = useState(ccDefaultSprite);

    useEffect(() => {
        if (isUserAuthenticated) {
            setCreditCardSprite(ccSelectedSprite);
        } else {
            setCreditCardSprite(ccDefaultSprite);
        }
    }, [isUserAuthenticated])

    const displayEnterPinOption = () => {
        return <Grid2 className={classes.rightOptionStyle} container>
            <Grid2 style={{ alignContent: "center", height: "25px" }}>
                {isPinValid ? "OK" : "Enter PIN"}
            </Grid2>
            <Grid2 style={{ height: "21px", alignContent: "center" }}>
                <div className={classes.atmOptionTrackStyle} />
            </Grid2>
        </Grid2>
    }

    const exitSession = () => {
        alert("exit session")
    }

    const fetchBalance = () => {
        alert("fetch balance")
    }

    const withdrawFunds = () => {
        alert("withdraw funds")
    }

    const depositFunds = () => {
        alert("deposit funds")
    }

    const displayPinEntry = () => {
        setDidClickEnterPinBtn(!didClickEnterPinBtn);
        if (isPinValid) {
            setIsUserAuthenticated(true);
        }
    }

    const pinEntryFieldDidChange = (pinStr) => {
        if (pinStr.length === 4) {
            setisPinValid(true);
        } else {
            setisPinValid(false);
        }
    }

    const leftButtonOptions = [
        { labelNm: "", onClickFuncNm: () => { } },
        { labelNm: "", onClickFuncNm: () => { } },
        { labelNm: "Withdraw", onClickFuncNm: () => withdrawFunds() },
        { labelNm: "Deposit", onClickFuncNm: () => depositFunds() }
    ];

    const rightButtonOptions = [
        { labelNm: "", onClickFuncNm: () => { } },
        { labelNm: "Exit", onClickFuncNm: () => exitSession() },
        { labelNm: "Balance", onClickFuncNm: () => fetchBalance() },
        { labelNm: "Re-Enter Pin", onClickFuncNm: () => displayPinEntry() }
    ];

    const displayScreenView = () => {
        return <Grid2>
            <div className={classes.screenBgStyle}>
                <div className={classes.screenStyle}>
                    {welcomeMsg}
                    {didClickEnterPinBtn ?
                        <Grid2 direction={"column"} style={{ paddingLeft: "65px", position: "absolute", alignContent: "center", paddingTop: "50px" }} container>
                            Enter your PIN
                            <TextField inputProps={{ maxLength: 4 }} size="small" onChange={(e) => {
                                const pinStr = e.target.value;
                                pinEntryFieldDidChange(pinStr)
                            }} style={{ width: "100px" }} />
                        </Grid2>
                        : null
                    }
                    <Grid2 className={classes.optionContainerStyle} container>
                        {!isUserAuthenticated ? displayEnterPinOption() : displayUserOptions()}
                    </Grid2>
                </div>
                <img src={stickerGraffiti} alt="stickerGraffiti" className={classes.stickerGraffitiStyle} />
                <img src={systemsLabel} alt="systemsLabel" className={classes.systemsLabelStyle} />
            </div>
        </Grid2>
    }

    const displayUserOptions = () => {
        return <Grid2>
            {rightButtonOptions.map((option, index) => {
                return <Grid2 className={classes.rightOptionStyle} key={index} container>
                    <Grid2 style={{ alignContent: "center", height: "25px" }}>
                        {option.labelNm}
                    </Grid2>
                    {option.labelNm &&
                        <Grid2 style={{ height: "21px", alignContent: "center" }}>
                            <div className={classes.atmOptionTrackStyle} />
                        </Grid2>}
                </Grid2>
            })}
        </Grid2>
    }

    const displayLeftButtonView = () => {
        return <Grid2 className={classes.leftButtonStyle} container spacing={1}>
            {leftButtonOptions.map((option, index) => {
                return <Grid2 style={{ textAlign: "right" }} key={index}>
                    <Button onClick={() => option.onClickFuncNm()} className={classes.buttonStyle} />
                    <div className={classes.atmButtonTrackStyle} />
                </Grid2>
            })}
        </Grid2>
    }

    const displayRightButtonView = () => {
        return <Grid2 className={classes.rightButtonStyle} container spacing={1}>
            {rightButtonOptions.map((option, index) => {
                return <Grid2 key={index} style={{ height: "25px" }}>
                    <div className={classes.atmButtonTrackStyle} />
                    <Button onClick={() => option.onClickFuncNm()} className={classes.buttonStyle} />
                </Grid2>
            })}
        </Grid2>
    }

    return (
        <Grid2 className={classes.screenLayoutStyle} container>
            <Grid2 style={{ width: "100%", justifyItems: "center" }}>
                <div className={classes.atmSignShadowStyle} />
                <div>
                    <img src={creditCardSprite} alt="ccSprite" style={{ padding: "10px 0 0 0" }} />
                </div>
            </Grid2>
            <Grid2 container style={{ height: "100%" }}>
                {displayLeftButtonView()}
                {displayScreenView()}
                {displayRightButtonView()}
            </Grid2>
        </Grid2>
    );
}

export default ScreenView;