import React from "react";

const Facts = (props) => {
    const data = props.data || {
        text: 'fact',
        source: 'site',
        source_url: 'http://',
        lenguage: 'en',
        permalink: 'link'
    }

    return (
        <div>
            <h1>Random Facts</h1>
            <h2>{data.source}</h2>
            <p>{data.text}</p>
            <a href={data.permalink}>{data.source_url}</a>
        </div>
    )
}

export { Facts }