import React from "react";
import styles from './countryList.module.css'
import { Link } from 'react-router-dom'

export function Lista({ paises, setDetails }) {

    return (
        <>{paises.length > 1 ?
            < div className={styles.paises}>
                {paises && paises.map((val, id) => {
                    return (
                        <Link to='/Details' style={{ textDecoration: 'none' }}>
                            <div onClick={() => { setDetails(val) }}>
                                <img src={val.flags.png}></img>
                                <h2>Nome Comum:&nbsp;&nbsp;&nbsp;<span>{val.name.common}</span></h2>
                                <span>{val.region}</span>
                            </div>
                        </Link>
                    )
                })}
            </div>
            :
            < div className={styles.pais}>
                {paises && paises.map((val, id) => {
                    return (
                        <Link to='/Details' style={{ textDecoration: 'none' }}>
                            <div onClick={() => { setDetails(val) }}>
                                <img src={val.flags.png}></img>
                                <h2>Nome Comum:&nbsp;&nbsp;&nbsp;<span>{val.name.common}</span></h2>
                                <span>{val.region}</span>
                            </div>
                        </Link>

                    )
                })}
            </div>
        }
        </>
    )
}