import React from 'react';
import TextBlock from '../TextBlock';
import Colors from '../colors';
import Size from '../size';
import Button from '../button';
import './style.css';



const Card = ({ title, content, price, titleColors, color1, color2, color3, color4, titleSize, size1, size2, size3, btnContent }) => (
    <div className='card'>
        <TextBlock title={title} content={content} price={price} />
        <Colors title={titleColors} color1={color1} color2={color2} color3={color3} color4={color4} />
        <Size title={titleSize} size1={size1} size2={size2} size3={size3} />
        <Button btnContent={btnContent} />
    </div>
)

export default Card