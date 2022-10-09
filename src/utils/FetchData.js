import { useEffect } from "react";

export function Fetch({ param, setPaises }) {
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/${param}`)
            .then((response) => response.json())
            .then((data) => setPaises(data));
    }, [param])

    return <></>
}