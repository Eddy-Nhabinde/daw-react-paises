import styles from './mainPage.module.css'
import { FilterCountries } from '../components/FilterCountries/filterCountries'
import { Lista } from '../components/countryList/countryList'
import { useState } from 'react'
import { Fetch } from '../utils/FetchData'

export function MainPage({setDetails}) {
    const [paises, setPaises] = useState("")
    const [param, setParam] = useState("all")

    const change = (e) => {
        if (e.target.value.length > 0) {
            setParam(`name/${e.target.value}`)
        } else {
            setParam('all')
        }
    }
    return (
        <>
            <Fetch param={param} setPaises={setPaises} />
            <div className={styles.body}>
                <h1>Encontre a informacao sobre paises num so lugar</h1>
                <div className={styles.serachContainer}>
                    <div className={styles.pesquisa}>
                        <div className={"input-group rounded"}>
                            <i className={"fas fa-search"} />
                            <input onChange={(e) => { change(e) }} type="search" className={"form-control rounded"} placeholder="Pesquisar Pais" aria-label="Search" aria-describedby="search-addon" />
                        </div>
                    </div>
                </div>
                <FilterCountries paises={paises} setParam={setParam} />
                <Lista paises={paises} setDetails={setDetails} />
            </div>
        </>
    )
}