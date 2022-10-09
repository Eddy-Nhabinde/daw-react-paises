import styles from './filterCountries.module.css'

export function FilterCountries() {
    return (
        <div className={styles.container}>
            <div className={styles.firstDiv}>
                <div>
                    <i className={"fa-solid fa-filter"}></i>
                    <span>
                        Filtrar Por Regiao
                    </span>
                </div>
                <div>
                    <i class="fa-solid fa-globe"></i>
                    <span>
                        Numero De Paises
                    </span>
                </div>
            </div>
            <div className={styles.SecondDiv}>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>News</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul>
                </div>
                <div>
                    <span>250 Paises Pertencentes a Esta Categoria</span>
                </div>
            </div>
        </div>
    )
}