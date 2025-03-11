import React, { useState, useEffect, use } from "react";
import { Grid2, Button, TextField } from '@mui/material';
import ccDefaultSprite from "../assets/default_creditcard_sprite.png";
import ccSelectedSprite from "../assets/selected_creditcard_sprite.png";
import stickerGraffiti from "../assets/sticker_graf.png";
import systemsLabel from "../assets/systems.png";
import { useStyles } from "./atm-styles";

const ScreenView = () => {

    const { classes } = useStyles();
    const [isPinValid, setisPinValid] = useState(false);
    const [didClickEnterPinBtn, setDidClickEnterPinBtn] = useState(false);
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
    const [creditCardSprite, setCreditCardSprite] = useState(ccDefaultSprite);
    const [pinTextField, setPinTextField] = useState("");

    useEffect(() => {
        if (pinTextField.length === 4) {
            setisPinValid(true);
        } else {
            setisPinValid(false);
        }
    }, [pinTextField.length])

    useEffect(() => {
        if (isUserAuthenticated) {
            // highlight the "star" sprite if the user is authenticated and "logged" into the atm
            setCreditCardSprite(ccSelectedSprite);
        } else {
            setCreditCardSprite(ccDefaultSprite);
        }
    }, [isUserAuthenticated])

    const exitSession = () => {
        setIsUserAuthenticated(false);
        setisPinValid(false);
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
            // if the pin is valid (length of 4), set isUserAuthenticated to true to display user options
            setIsUserAuthenticated(true);
        }
    }

    // use regex to only allow numbers in the pin field
    const handlePinTextFieldChange = (e) => {
        const pinStr = e.target.value;
        const numericValue = pinStr.replace(/[^0-9]/g, '');
        setPinTextField(numericValue);
    }

    // create left atm button options that can be mapped and displayed on the UI
    const leftButtonOptions = [
        { labelNm: "", onClickFuncNm: () => { } },
        { labelNm: "", onClickFuncNm: () => { } },
        { labelNm: "Withdraw", onClickFuncNm: () => withdrawFunds() },
        { labelNm: "Deposit", onClickFuncNm: () => depositFunds() }
    ];

    // create right atm button options that can be mapped and displayed on the UI
    const rightButtonOptions = [
        { labelNm: "", onClickFuncNm: () => { } },
        { labelNm: "Exit", onClickFuncNm: () => exitSession() },
        { labelNm: "Balance", onClickFuncNm: () => fetchBalance() },
        { labelNm: "Re-Enter Pin", onClickFuncNm: () => displayPinEntry() }
    ];

    // display welcome message based on whether the user is authenticated or not
    const displayWelcomeMsg = () => {
        return <div>
            {!isUserAuthenticated ? <> Welcome to the ATM <br /><br /> </> :
                <> Hi Peter Parker!<br />Please make a choice... </>
            }
        </div>
    }

    const displayScreenView = () => {
        return <Grid2>
            <div className={classes.screenBgStyle}>
                <div className={classes.screenStyle}>
                    {displayWelcomeMsg()}
                    {didClickEnterPinBtn ?
                        <Grid2 direction={"column"} style={{ paddingLeft: "65px", position: "absolute", alignContent: "center", paddingTop: "20px" }} container>
                            Enter your PIN
                            <TextField inputProps={{ maxLength: 4 }} size="small" onChange={handlePinTextFieldChange} value={pinTextField} style={{ width: "100px" }} />
                        </Grid2>
                        : null
                    }
                    <Grid2 className={classes.optionContainerStyle} container>
                        {!isUserAuthenticated ? displayDefaultPinOption() : displayLoggedInUserOptions()}
                    </Grid2>
                </div>
                <img src={stickerGraffiti} alt="stickerGraffiti" className={classes.stickerGraffitiStyle} />
                <img src={systemsLabel} alt="systemsLabel" className={classes.systemsLabelStyle} />
            </div>
        </Grid2>
    }

    // map over all screen button options to display on the UI
    const displayLoggedInUserOptions = () => {
        return <>
            <Grid2>
                {/* display left screen button options */}
                {leftButtonOptions.map((option, index) => {
                    return <Grid2 className={classes.leftOptionStyle} key={index} container>
                        {
                            option.labelNm &&
                            <Grid2 style={{ height: "21px", alignContent: "start" }}>
                                <div className={classes.atmOptionTrackStyle} />
                            </Grid2>
                        }
                        <Grid2 style={{ alignContent: "center", height: "25px" }}>
                            {option.labelNm}
                        </Grid2>

                    </Grid2>
                })}
            </Grid2>
            <Grid2>
                {/* display right screen button options */}
                {rightButtonOptions.map((option, index) => {
                    return <Grid2 className={classes.rightOptionStyle} key={index} container>
                        <Grid2 style={{ alignContent: "center", height: "25px" }}>
                            {option.labelNm}
                        </Grid2>
                        {
                            option.labelNm &&
                            <Grid2 style={{ height: "21px", alignContent: "start" }}>
                                <div className={classes.atmOptionTrackStyle} />
                            </Grid2>
                        }
                    </Grid2>
                })}
            </Grid2>
        </>
    }

    // display left side clickable buttons
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

    // display right side clickable buttons
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

    // display default "Enter PIN" option on UI load
    const displayDefaultPinOption = () => {
        return <Grid2 className={classes.rightOptionStyle} container>
            <Grid2 style={{ alignContent: "center", height: "25px" }}>
                {isPinValid ? "OK" : "Enter PIN"}
            </Grid2>
            <Grid2>
                <div className={classes.atmOptionTrackStyle} />
            </Grid2>
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
                {/* render the atm screen and all buttons */}
                {displayLeftButtonView()}
                {displayScreenView()}
                {displayRightButtonView()}
            </Grid2>
        </Grid2>
    );
}

export default ScreenView;