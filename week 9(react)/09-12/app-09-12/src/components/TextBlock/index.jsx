import React from "react";
import './style.css';

const TextBlock = ({ title, content, price }) => (
    <div className='textBlock'>
        <div className='textBlock__titlePrice'>
            <h3>{title}</h3>
            <h3>{price}</h3>
        </div>
        <p>{content}</p>
    </div>
)

export default TextBlock