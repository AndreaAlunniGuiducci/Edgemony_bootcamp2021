import { useRef } from "react";
import "./Carousel.css";

const Carousel = () => {

    const wrapper = useRef();

    const imgScroll = (element, direction) => {
        if (direction === 'left') element.current.scrollLeft -= 305;
        if (direction === 'right') element.current.scrollLeft += 305;
    }

    return (
        <div>
            <h1>Carousel</h1>

            <div className="carousel" ref={wrapper}>
                <div className="wrapper">
                    <img src="https://picsum.photos/id/1/200/300"></img>
                    <img src="https://picsum.photos/id/2/200/300"></img>
                    <img src="https://picsum.photos/id/3/200/300"></img>
                    <img src="https://picsum.photos/id/4/200/300"></img>
                    <img src="https://picsum.photos/id/5/200/300"></img>
                    <img src="https://picsum.photos/id/6/200/300"></img>
                    <img src="https://picsum.photos/id/7/200/300"></img>
                    <img src="https://picsum.photos/id/8/200/300"></img>
                    <img src="https://picsum.photos/id/9/200/300"></img>
                    <img src="https://picsum.photos/id/10/200/300"></img>
                </div>
            </div>

            <button className='leftBtn' onClick={() => imgScroll(wrapper, 'left')}>
                <img src="https://img.icons8.com/ios-filled/50/000000/circled-v.png" />
            </button>

            <button className='rightBtn' onClick={() => imgScroll(wrapper, 'right')}>
                <img src="https://img.icons8.com/ios-filled/50/000000/circled-v.png" />
            </button>

        </div>
    )
}

export default Carousel;