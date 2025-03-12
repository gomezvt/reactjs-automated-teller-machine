import React, { useState, useEffect } from "react";
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
    const [pinFieldText, setPinFieldText] = useState("");
    const [depositWithdrawFieldText, setDepositWithdrawFieldText] = useState("");
    const [didCheckBalance, setDidCheckBalance] = useState(false);
    const [balance, setBalance] = useState(4900);
    const [didClickDeposit, setDidClickDeposit] = useState(false);
    const [didClickWithdraw, setDidClickWithdraw] = useState(false);
    const [enterButtonLabel, setEnterButtonLabel] = useState("Enter PIN");

    // set pin to valid when length is 4
    useEffect(() => {
        if (pinFieldText.length === 4) {
            setisPinValid(true);
        } else {
            setisPinValid(false);
        }
    }, [pinFieldText.length])

    useEffect(() => {
        if (isUserAuthenticated) {
            // highlight the "star" sprite if the user is authenticated and "logged" into the atm
            setCreditCardSprite(ccSelectedSprite);
        } else {
            setCreditCardSprite(ccDefaultSprite);
        }
    }, [isUserAuthenticated])

    // reset state when exit button is clicked
    const exitSession = () => {
        setIsUserAuthenticated(false);
        setisPinValid(false);
        setPinFieldText("");
        setDidCheckBalance(false);
        setDidClickDeposit(false);
        setDidClickWithdraw(false);
        setDepositWithdrawFieldText("");
        setDidClickEnterPinBtn(false);
    }

    // show balance when button is clicked
    const fetchBalance = () => {
        setDidCheckBalance(!didCheckBalance);
        setDidClickEnterPinBtn(false);
        setDidClickDeposit(false);
        setDidClickWithdraw(false);
        setDidClickEnterPinBtn(false);
    }

    // show withdraw text field when button is clicked
    const withdrawFunds = () => {
        setDidClickWithdraw(!didClickWithdraw);
        setDidClickEnterPinBtn(false);
        setDepositWithdrawFieldText("");
        setDidClickDeposit(false);
        setDidCheckBalance(false);
    }

    // show deposit text field when button is clicked
    const depositFunds = () => {
        setDidClickDeposit(!didClickDeposit);
        setDidClickEnterPinBtn(false);
        setDepositWithdrawFieldText("");
        setDidClickWithdraw(false);
        setDidCheckBalance(false);
    }

    // set "Enter" button label text depending on deposit/withdraw text field length and isPinValid state
    useEffect(() => {
        if (isPinValid) {
            setEnterButtonLabel("OK");
        } else {
            setEnterButtonLabel("Enter PIN");
        }
    }, [isPinValid, depositWithdrawFieldText.length])

    // called when "Enter" button is clicked, which can have "Enter PIN", "Re-Enter PIN", and "OK" labels (uses "enterButtonLabel")
    const displayPinEntry = () => {
        setPinFieldText("");
        setDidClickDeposit(false);
        setDidCheckBalance(false);
        setDidClickWithdraw(false);
        setDidClickEnterPinBtn(!didClickEnterPinBtn);
        if (isPinValid) {
            // if the pin is valid (length of 4), set isUserAuthenticated to true to display user options
            setIsUserAuthenticated(true);
        }
        // use depositWithdrawFieldText interchangeably between withdraw and deposit
        if (depositWithdrawFieldText.length > 0) {
            let totalBalance;
            if (didClickDeposit) {
                totalBalance = balance + Number(depositWithdrawFieldText);
            } else {
                totalBalance = balance - Number(depositWithdrawFieldText);
            }
            setBalance(totalBalance);
            setDidClickEnterPinBtn(false);
        }
    }

    // display default "Enter PIN" option on UI load
    const displayDefaultPinOption = () => {
        return <Grid2 className={classes.rightOptionStyle} container>
            <Grid2 style={{ alignContent: "center", height: "30px" }}>
                {enterButtonLabel}
            </Grid2>
            <Grid2 style={{margin: "2px 0 0 0"}}>
                <div className={classes.atmOptionTrackStyle} />
            </Grid2>
        </Grid2>
    }

    // use regex to only allow numbers in the pin field
    const handleWithdrawTextFieldChange = (e) => {
        const pinStr = e.target.value;
        const numericValue = pinStr.replace(/[^0-9]/g, '');
        setDepositWithdrawFieldText(numericValue);
    }

    // use regex to only allow numbers in the pin field
    const handleDepositTextFieldChange = (e) => {
        const pinStr = e.target.value;
        const numericValue = pinStr.replace(/[^0-9]/g, '');
        setDepositWithdrawFieldText(numericValue);
    }

    // use regex to only allow numbers in the pin field
    const handlePinTextFieldChange = (e) => {
        const pinStr = e.target.value;
        const numericValue = pinStr.replace(/[^0-9]/g, '');
        setPinFieldText(numericValue);
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
        { labelNm: isPinValid || depositWithdrawFieldText.length > 0 ? "OK" : "Re-Enter PIN", onClickFuncNm: () => displayPinEntry() }
    ];

    // display welcome message based on whether the user is authenticated or not
    const displayWelcomeMsg = () => {
        if (!isUserAuthenticated) {
            return <>Welcome to the ATM <br /><br /></>
        } else {
            return <> Hi Peter Parker!<br />Please make a choice...</>
        }
    }

    // show balance information to include textfield to withdraw/deposit depending on the button that was clicked
    const displayBalanceView = () => {
        if (didCheckBalance) {
            return `Your balance is $${balance.toString()}`;
        }

        // use same TextField component below interchangeably depending on whether withdraw or deposit button was clicked
        if (didClickDeposit || didClickWithdraw) {
            const textFieldLabel = didClickDeposit ? "Deposit funds" : "Withdraw funds";
            const onChange = didClickDeposit ? handleDepositTextFieldChange : handleWithdrawTextFieldChange;
            return <Grid2 direction={"column"} style={{ paddingLeft: "65px", position: "absolute", alignContent: "center", paddingTop: "20px" }} container>
                {textFieldLabel}
                <TextField size="small" onChange={onChange} value={depositWithdrawFieldText} style={{ width: "100px" }} />
            </Grid2>

        }
    }

    // display main screen view 
    const displayScreenView = () => {
        return <Grid2>
            <div className={classes.screenBgStyle}>
                <div className={classes.screenStyle}>
                    <Grid2 style={{ textAlign: "center" }}>
                        {/* display welcome message on top of screen */}
                        {displayWelcomeMsg()}
                    </Grid2>
                    <Grid2>
                        {/* if initial Enter PIN button was clicked, show textfield to enter PIN */}
                        {didClickEnterPinBtn ?
                            <Grid2 direction={"column"} style={{ paddingLeft: "65px", position: "absolute", alignContent: "center", paddingTop: "43px" }} container>
                                Enter your PIN
                                <TextField inputProps={{ maxLength: 4 }} size="small" onChange={handlePinTextFieldChange} value={pinFieldText} style={{ width: "100px" }} />
                            </Grid2>
                            : null
                        }
                    </Grid2>
                    <Grid2 className={classes.optionContainerStyle} container>
                        {/* show either initial Enter PIN option on UI load or all options if the user has been authenticated */}
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
        return <Grid2 style={{ height: "175px" }}>
            <Grid2 style={{ width: "100%", height: "45px", alignContent: "center" }}>
                {displayBalanceView()}
            </Grid2>
            <Grid2 flexDirection={"row"} direction={"row"} container>
                <Grid2 style={{ width: "50%", height: "100%" }}>
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
                <Grid2 style={{ width: "50%", height: "100%" }}>
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
            </Grid2>
        </Grid2>
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