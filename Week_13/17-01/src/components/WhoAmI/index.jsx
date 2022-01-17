import { useState, useEffect, useRef } from "react";
// import "./WhoAmI.css";

const WhoAmI = () => {
    const handleInputChange = (e) => {
        setInputState(e.target.value);
    }

    const setTitle = (e) => {
        e.preventDefault();
        setHeaderTitle(inputState);
    }

    const [headerTitle, setHeaderTitle] = useState('Who Am I?');
    const [inputState, setInputState] = useState('');
    const headerRef = useRef();

    useEffect(() => {
        headerRef.current.innerText = 'Hello'
        console.log(headerRef);
    }, [inputState])

    return (
        <div>
            <h1 ref={headerRef}>{headerTitle}</h1>
            <p>lorem ipsum dolor sit amet lorem, consectetur adipiscing lorem, sed diam nonumy eirmod tempor</p>
            <form onSubmit={setTitle}>
                <input type="text" value={inputState} onChange={handleInputChange} />
                <button>SUBMIT</button>
            </form>

            <div className='wrapper'>
                <p>lorem ipsum lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip</p>
            </div>
        </div>
    )
}

export default WhoAmI;