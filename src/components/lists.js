import cn from "classnames";
import Search from "./tools/search";
import ListItem from "./listItem";

import s from "./lists.module.css";
import {useNavigate} from "react-router-dom";

const Lists = ({isChosen = false, chosenItem, dbLists = {}, }) => {
    const navigate = useNavigate();

    const openItem = (id) => {
        navigate('/list');
        chosenItem && chosenItem(id);
    }

    const showData =  () =>{
        console.log(dbLists)
    }

    return(
        <div className={cn(s.wrap/*s.wrap, {[s.visible]: !isChosen*/)}>
            <div className={cn(s.listHead, s.wrapper)}>
                <Search/>
            </div>
            <div className={cn(s.items)}>
                {
                    Object.entries(dbLists).map(([key,{id, title}]) =>
                        <ListItem KEY={key} id={id} title={title} openItem={openItem}/>
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