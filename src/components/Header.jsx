import React from "react";
import { Link } from "react-router-dom";
import {IMG} from "../config/app";

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="logo">
                <img src={IMG+"logo.png"} alt="logo" />
            </Link>
        </header>
    )
}

export default Header
