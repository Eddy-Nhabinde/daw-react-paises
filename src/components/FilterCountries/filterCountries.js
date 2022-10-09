import styles from './filterCountries.module.css'

export function FilterCountries({ paises, setParam }) {
    const clicou = (region) => {

    }

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
                        <li onClick={() => { clicou(setParam('all')) }}>Todas</li>
                        <li onClick={() => { clicou(setParam('region/africa')) }}>Africa</li>
                        <li onClick={() => { clicou(setParam('region/europe')) }}>Europa</li>
                        <li onClick={() => { clicou(setParam('region/asia')) }}>Asia</li>
                        <li onClick={() => { clicou(setParam('region/ame')) }}>America</li>
                        <li onClick={() => { clicou(setParam('region/oceania')) }}>Oceania</li>
                    </ul>
                </div>
                <div>
                    <span>{paises.length} Paises Pertencentes a Esta Categoria</span>
                </div>
            </div>
        </div>
    )
}