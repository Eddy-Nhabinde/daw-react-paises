import React from "react";
import styles from './countryList.module.css'

export function Lista({ paises }) {

    return (
        <>{paises.length > 1 ?
            < div className={styles.paises}>
                {paises && paises.map((val, id) => {
                    return (
                        <div>
                            <img src={val.flags.png}></img>
                            <h2>Nome Comum:&nbsp;&nbsp;&nbsp;<span>{val.name.common}</span></h2>
                            {val.region}
                        </div>
                    )
                })}
            </div>
            :
            < div className={styles.pais}>
                {paises && paises.map((val, id) => {
                    return (
                        <div>
                            <img src={val.flags.png}></img>
                            <h2>Nome Comum:&nbsp;&nbsp;&nbsp;<span>{val.name.common}</span></h2>
                            {val.region}
                        </div>
                    )
                })}
            </div>
        }
        </>
    )
}