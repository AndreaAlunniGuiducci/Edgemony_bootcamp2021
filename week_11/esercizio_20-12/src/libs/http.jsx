import { useState, useEffect } from "react";

const useFetch = (url, INIT_STATE) => {
    const [result, setResult] = useState(INIT_STATE);

    useEffect(() => {
        fetch(url)
            .then(response => response.json)
            .then((data) => setResult(data))
    }, [])

    return result;
}

export { useFetch };