import { makeStyles } from 'tss-react/mui';
import atmButton from "../assets/atm-button.png";

export const useStyles = makeStyles()((theme) => ({
    atmSignShadowStyle: {
        backgroundColor: theme.palette.grey[400],
        height: theme.spacing(1),
        padding: theme.spacing(0),
        width: "100%",
        textAlign: "center"
    },
    atmSignStyle: {
        width: "440px",
        height: "163px",
        backgroundColor: "#126cae",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: '20px',
        textAlign: "center",
        position: "relative"
    },
    graffitiStyle: {
        position: "absolute",
        margin: "14px 0 0 -168px"
    },
    buttonStyle: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: "25px",
        minWidth: "40px",
        backgroundImage: `url(${atmButton})`,
    },
    atmButtonTrackStyle: {
        height: theme.spacing(0.25),
        width: theme.spacing(1.5),
        backgroundColor: theme.palette.grey[500],
        display: "inline-block",
    },
    atmOptionTrackStyle: {
        height: theme.spacing(0.25),
        width: theme.spacing(1.5),
        backgroundColor: "white",
        display: "inline-block",
    },
    screenStyle: {
        textAlign: "center",
        color: "white",
        backgroundColor: "#7eb4d5",
        width: "235px",
        height: "210px",
        paddingTop: "15px"
    },
    screenBgStyle: {
        padding: "5px 0 5px 5px",
        ustifyItems: "center",
        backgroundColor: theme.palette.grey[300],
        width: "240px",
        minHeight: "210px"
    },
    screenLayoutStyle: {
        padding: theme.spacing(0),
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
        height: "220px",
        margin: "-7px 0 0 0"
    },
    leftButtonStyle: {
        justifyContent: "end",
        flexDirection: "column",
        height: "220px",
        margin: "-7px 0 0 0"
    },
    optionContainerStyle: {
        justifyContent: "end",
        flexDirection: "column",
        height: "200px",
        margin: "-33px 0 0 0"
    },
    rightOptionStyle: {
        height: "33px",
        justifyContent: "end",
    },
    leftOptionStyle: {
        height: "33px",
        justifyContent: "start",
    },
    systemsLabelStyle: {
        position: "absolute",
        margin: "10px 0 0 185px",
    }
}));