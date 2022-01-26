import { useState, useEffect } from 'react';
import { Image } from 'next/image';
import DefaultLayout from './../layouts/index.jsx';
import style from '../styles/Gallery.module.scss'

const loremPicsum = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/301",
    "https://picsum.photos/201/300"
];

const Galleria = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(loremPicsum);
    }, []);

    return (
        <DefaultLayout>
            <div className={style.wrapper}>
                {images.map((img) => (<img src={img} alt={img} width={200} height={400} key={img} className={style.image} />
                ))}
            </div>
        </DefaultLayout>)
}

export default Galleria;