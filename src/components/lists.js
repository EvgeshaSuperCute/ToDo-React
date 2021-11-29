import cn from "classnames";
import Search from "./tools/search";
import ListItem from "./listItem";

import s from "./lists.module.css";

const Lists = ({isChosen, chosenItem, dbLists = {}, }) => {


    const openItem = (id) => {
        chosenItem && chosenItem(id);
    }
    const showData =  () =>{
        console.log(dbLists)
    }

    return(
        <div className={cn(s.wrap, {[s.visible]: !isChosen})}>
            <div className={cn(s.listHead, s.wrapper)}>
                <Search/>
            </div>
            <div className={cn(s.items)}>
                {
                    Object.entries(dbLists).map(([key,{id, title}]) =>
                        <ListItem key={key} id={id} title={title} openItem={openItem}/>
                    )
                }
            </div>
            <div className={cn(s.listFooter, s.wrapper)}>
                <button className={cn(s.button, s.add)} onClick={showData}>
                    Add
                </button>
                <button className={cn(s.button, s.delete)}>
                    Delete selected
                </button>
            </div>
        </div>

    )
}

export default Lists;