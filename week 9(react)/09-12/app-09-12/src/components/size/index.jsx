import React from "react";
import './style.css';

const Size = ({ title, size1, size2, size3 }) => (
    <div className='size'>
        <h2>{title}</h2>
        <span className='size__dot'>{size1}</span>
        <span className='size__dot'>{size2}</span>
        <span className='size__dot'>{size3}</span>
    </div>
)

export default Size