import React from "react";
import { useEffect, useState } from "react";
import { Facts } from "../../components/Facts";

const facts = [];

const RandomFacts = () => {

    const [factsPreview, setFactsPreview] = useState(facts);

    useEffect(() => {
        fetch('https://uselessfacts.jsph.pl/random.json?language=en')
            .then(response => response.json())
            .then((data) => setFactsPreview(data))
    },
        []
    )
    return (
        <div>
            <Facts data={factsPreview} />
        </div>
    )
}
export { RandomFacts };