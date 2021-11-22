//import cn from "classnames"

import s from './search.module.css';

const Search = () => {

    return (
        <>
            <form action="" method="get">
                <input className={s.search} placeholder="search..." type="search"/>
                <button className={s.button}>🔍</button>
            </form>
        </>
    )
}


export default Search;