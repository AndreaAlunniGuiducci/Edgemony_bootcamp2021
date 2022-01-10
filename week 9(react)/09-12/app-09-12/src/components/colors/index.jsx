import React from "react";
import './style.css';

const Colors = ({ title, color1, color2, color3, color4 }) => (
    <div>
        <h2>{title}</h2>
        <span className="color1">{color1}</span>
        <span className="color2">{color2}</span>
        <span className="color3">{color3}</span>
        <span className="color4">{color4}</span>
    </div>
)

export default Colors