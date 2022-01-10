import React from "react";
import './style.css';

const Button = ({ btnContent }) => (
    <div className="Button">
        <btn className="btn">{btnContent}</btn>
    </div>
)

export default Button