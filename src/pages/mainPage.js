import styles from './mainPage.module.css'
import { FilterCountries } from '../components/FilterCountries/filterCountries'
import { Lista } from '../components/countryList/countryList'

export function MainPage() {
    return (
        <>
            <div className={styles.body}>
                <h1>Encontre a informacao sobre paises num so lugar</h1>
                <div className={styles.serachContainer}>
                    <div className={styles.pesquisa}>
                        <div className={"input-group rounded"}>
                            <i className={"fas fa-search"} />
                            <input type="search" className={"form-control rounded"} placeholder="Pesquisar Pais" aria-label="Search" aria-describedby="search-addon" />
                        </div>
                    </div>
                </div>
                <FilterCountries />
                <Lista />
            </div>
        </>
    )
}