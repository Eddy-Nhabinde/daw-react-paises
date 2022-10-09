import React, { useState, useEffect } from "react";
import styles from './countryList.module.css'

export function Lista() {
    const [paises, setPaises] = useState("")

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => setPaises(data));
    }, [])

    return (
        <div className={styles.paises}>
            {paises && paises.map((val, id) => {
                console.log(val)
                return (
                    <div>
                        <img src={val.flags.png}></img>
                    </div>
                )
            })}
        </div>
    )
}