import * as React from "react";
import logo from "../../images/Logo.png"
import classes from "./header.module.scss"

const Header = () => {
    return (
        <div className={classes.Logo}>
            <img src={logo} alt="Logo" />
        </div>
        
    );
}

export default Header