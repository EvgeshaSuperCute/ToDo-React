import cn from "classnames"

import s from './listItem.module.css';

function ListItem({id, title, openItem}) {

    const chosenItem = () =>{
        openItem && openItem(id-1);
    }

    return (
            <div className={cn(s.item)} onClick={chosenItem}>
                <h4>{id}</h4>
                <h5>{title}</h5>
            </div>

    );
}

export default ListItem;
