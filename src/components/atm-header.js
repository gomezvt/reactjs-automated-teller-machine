import atmSign from "../assets/atm_sign.png";
import graffiti from "../assets/graffiti.png";
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({

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
    }
}));

function DisplayHeader() {
    const { classes } = useStyles();
    return (
        <div style={{ backgroundColor: "white", justifyItems: "center" }}>
            <div style={{ justifyItems: "center", alignItems: "center" }}>
                <div className={classes.atmSignStyle}>
                    <img src={atmSign} alt="atmSign" />
                    <img src={graffiti} alt="atmSign" className={classes.graffitiStyle} />

                </div>
            </div>
        </div>
    )
}

export default DisplayHeader;