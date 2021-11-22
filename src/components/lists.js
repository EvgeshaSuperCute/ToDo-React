import cn from "classnames";
import s from "./lists.module.css";
import ListItem from "./listItem";

const lists = [
    {
        id: 1,
        title: "1 List",
    },
    {
        id: 2,
        title: "2 List",
    },
    {
        id: 3,
        title: "3 List",
    },
    {
        id: 4,
        title: "4 List",
    },
    {
        id: 5,
        title: "5 List",
    },
    {
        id: 6,
        title: "6 List",
    },
    {
        id: 7,
        title: "7 List",
    },
    {
        id: 8,
        title: "8 List",
    },
    {
        id: 9,
        title: "9 List",
    },
    {
        id: 10,
        title: "10 List",
    },
    {
        id: 11,
        title: "11 List",
    },
    {
        id: 12,
        title: "12 List",
    },
]



const Lists = ({isChosen, chosenItem}) => {

    const openItem = () => {
        chosenItem && chosenItem();
    }


    return(
        <div className={cn(s.items, {[s.visible]: !isChosen})}>
            {
                lists.map(({id, title}) =>
                    <ListItem key={id} id={id} title={title} openItem={openItem}/>
                )
            }
        </div>
    )
}

export default Lists;