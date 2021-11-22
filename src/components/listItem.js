//import logo from './logo.svg';

import s from './listItem.module.css';
import cn from "classnames"

function ListItem({id, title, openItem}) {

    const chosenItem = () =>{
        openItem && openItem();
    }

    return (
            <div className={cn(s.item)} onClick={chosenItem}>
                <h4>{id}</h4>
                <h5>{title}</h5>
            </div>

    );
}

export default ListItem;
