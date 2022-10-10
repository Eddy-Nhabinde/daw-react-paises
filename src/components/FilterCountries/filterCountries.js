import styles from './filterCountries.module.css'

export function FilterCountries({ paises, setParam }) {

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
                        <li onClick={() => { setParam('all') }}>Todas</li>
                        <li onClick={() => { setParam('region/africa') }}>Africa</li>
                        <li onClick={() => { setParam('region/europe') }}>Europa</li>
                        <li onClick={() => { setParam('region/asia') }}>Asia</li>
                        <li onClick={() => { setParam('region/ame') }}>America</li>
                        <li onClick={() => { setParam('region/oceania') }}>Oceania</li>
                    </ul>
                </div>
                <div>
                    <span>{paises.length} Paises Pertencentes a Esta Categoria</span>
                </div>
            </div>
        </div>
    )
}