import { makeStyles } from 'tss-react/mui';
import { Grid2, Button } from '@mui/material';
import ccSprite from "../assets/creditcard_sprite.png";
import atmButton from "../assets/atm-button.png";

const useStyles = makeStyles()((theme) => ({
    atmSignShadow: {
        backgroundColor: "lightgray",
        height: "0.5em",
        padding: 0,
        width: "100%"
    },
    screen: {
        backgroundColor: "#7eb4d5"
    }
}));


function DisplayScreen() {
    const { classes } = useStyles();
    return (
        <Grid2 style={{ padding: 0, background: "white", justifyContent: "center", width: "65%" }} container>
            <div className={classes.atmSignShadow} />
            <Grid2>
                <img src={ccSprite} alt="ccSprite" style={{ padding: "5px 0 0 0" }} />
            </Grid2>
            <Grid2 direction="row" container>
                <Grid2 style={{flexDirection: "column" }} container spacing={1}>
                    <Grid2 style={{textAlign: "right"}}>
                        <Button style={{
                            backgroundSize: 'cover', backgroundPosition: 'center', minHeight: "25px", minWidth: "40px", backgroundImage: `url(${atmButton})`
                        }} />
                        <div style={{ height: "3px", width: "13px", backgroundColor: "gray", display: "inline-block" }} />
                    </Grid2>
                    <Grid2 style={{textAlign: "right"}}>
                    <Button style={{
                            backgroundSize: 'cover', backgroundPosition: 'center', minHeight: "25px", minWidth: "40px", backgroundImage: `url(${atmButton})`
                        }} />
                        <div style={{ height: "3px", width: "13px", backgroundColor: "gray", display: "inline-block" }} />
                    </Grid2>
                    <Grid2 style={{textAlign: "right"}}>
                    <Button style={{
                            backgroundSize: 'cover', backgroundPosition: 'center', minHeight: "25px", minWidth: "40px", backgroundImage: `url(${atmButton})`
                        }} />
                        <div style={{ height: "3px", width: "13px", backgroundColor: "gray", display: "inline-block" }} />
                    </Grid2>
                    <Grid2 style={{textAlign: "right"}}>
                    <Button style={{
                            backgroundSize: 'cover', backgroundPosition: 'center', minHeight: "25px", minWidth: "40px", backgroundImage: `url(${atmButton})`
                        }} />
                        <div style={{ height: "3px", width: "13px", backgroundColor: "gray", display: "inline-block" }} />
                    </Grid2>
                </Grid2>
                <Grid2 className={classes.screen}>
                    <div style={{ padding: "5px 0 5px 0", justifyItems: "center", backgroundColor: "lightgray", width: "245px" }}>
                        <div style={{ backgroundColor: "white", width: "235px" }}>
                            test
                        </div>
                    </div>
                </Grid2>
                <Grid2 style={{flexDirection: "column" }} container spacing={1}>
                    <Grid2>
                    <div style={{ height: "3px", width: "13px", backgroundColor: "gray", display: "inline-block" }} />
                    <Button style={{
                            backgroundSize: 'cover', backgroundPosition: 'center', minHeight: "25px", minWidth: "40px", backgroundImage: `url(${atmButton})`
                        }} />
                    </Grid2>
                    <Grid2>
                    <div style={{ height: "3px", width: "13px", backgroundColor: "gray", display: "inline-block" }} />
                    <Button style={{
                            backgroundSize: 'cover', backgroundPosition: 'center', minHeight: "25px", minWidth: "40px", backgroundImage: `url(${atmButton})`
                        }} />
                    </Grid2>
                    <Grid2>
                    <div style={{ height: "3px", width: "13px", backgroundColor: "gray", display: "inline-block" }} />
                    <Button style={{
                            backgroundSize: 'cover', backgroundPosition: 'center', minHeight: "25px", minWidth: "40px", backgroundImage: `url(${atmButton})`
                        }} />
                    </Grid2>
                    <Grid2>
                    <div style={{ height: "3px", width: "13px", backgroundColor: "gray", display: "inline-block" }} />
                    <Button style={{
                            backgroundSize: 'cover', backgroundPosition: 'center', minHeight: "25px", minWidth: "40px", backgroundImage: `url(${atmButton})`
                        }} />
                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
    );
}

export default DisplayScreen;