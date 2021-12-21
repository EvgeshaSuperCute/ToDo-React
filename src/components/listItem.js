import cn from "classnames"

import s from './listItem.module.css';

function ListItem({KEY, id, title, openItem}) {

    //console.log("key:", KEY);
    const chosenItem = () =>{
        openItem && openItem(KEY);
    }

    return (
            <div className={cn(s.item)} onClick={chosenItem}>
                <h4>{id}</h4>
                <h5>{title}</h5>
            </div>

    );
}

export default ListItem;
