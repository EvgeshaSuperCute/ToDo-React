import cn from "classnames"

import s from './filter.module.css';
import {useState} from "react";

const Filter = () => {
    const [isOpen, setOpen] = useState(false);

    const openFilter = () => {
        setOpen(!isOpen);
    }

    return (
        <>
            <ul className={s.boxFilter}>
                <li><div className={cn(s.button,{[s.active]: isOpen})} onClick={openFilter}>Filter<b> ➥</b></div></li>
                <ul className={cn(s.filter,{[s.open]: isOpen})}>
                <li><button>Active</button> </li>
                <li><button>Inactive</button></li>
                <li><button className={s.last}>All</button></li>
                </ul>
            </ul>
        </>
    )
}


export default Filter;