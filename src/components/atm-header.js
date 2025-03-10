import atmSign from "../assets/atm_sign.png";
import graffiti from "../assets/graffiti.png";
import { useStyles } from "./atm-styles";

const HeaderView = () => {
    const { classes } = useStyles();
    return (
        <div style={{ justifyItems: "center" }}>
            <div style={{ justifyItems: "center", alignItems: "center" }}>
                <div className={classes.atmSignStyle}>
                    <img src={atmSign} alt="atmSign" />
                    <img src={graffiti} alt="atmSign" className={classes.graffitiStyle} />
                </div>
            </div>
        </div>
    )
}

export default HeaderView;