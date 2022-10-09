import styles from './CountryDetails.module.css'
import { Link } from 'react-router-dom'

export function CountryDetails({ details }) {
    return (
        <div className={styles.container}>
            <h1>{details.name.common}</h1>
            
            <Link to='/' style={{ textDecoration: 'none' }}>
                <div>
                    <i class="fa-solid fa-arrow-left"></i>
                    <span>&nbsp;&nbsp;Retroceder</span>
                </div>
            </Link>
            <div className={styles.Details}>
                <img src={details.flags.png} />
                <div>
                    <table>
                        <tr>
                            <td >Capital</td>
                            <td className={styles.titulo}>{details.capital[0]}</td>
                        </tr>
                        <tr>
                            <td >Regiao</td>
                            <td className={styles.titulo}>{details.region}</td>
                        </tr>
                        <tr>
                            <td >Sub-regiao</td>
                            <td className={styles.titulo}>{details.subregion}</td>
                        </tr>
                        <tr>
                            <td >Populacao</td>
                            <td className={styles.titulo}>{details.population}</td>
                        </tr>
                        <tr>
                            <td >Area</td>
                            <td className={styles.titulo}>{details.area}</td>
                        </tr>
                        <tr>
                            <td >Fuso Horario</td>
                            <td className={styles.titulo}>{details.timezones[1]}</td>
                        </tr>
                        <tr>
                            <td >Nome Nativo</td>
                            <td className={styles.titulo}></td>
                        </tr>
                    </table>
                </div>
            </div>
            <img className={styles.maps} src={details.maps.googleMaps} />
        </div>
    )
}