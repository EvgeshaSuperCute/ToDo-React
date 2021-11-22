import s from './list.module.css';
import {useState} from "react";

import cn from "classnames"
import ListRecord from "./listRecord";
import RecordForm from "./recordForm";
import Search from "./tools/search";
import Filter from "./tools/filter";

const listData = [
    {
        id: 1,
        title: "1 thing",
        text: "1 - some text for testing application"
    },
    {
        id: 2,
        title: "2 thing",
        text: "2 - some text for testing application"
    },
    {
        id: 3,
        title: "3 thing",
        text: "3 - some text for testing application"
    },
    {
        id: 4,
        title: "4 thing",
        text: "4 - some text for testing application"
    },
    {
        id: 5,
        title: "5 thing",
        text: "5 - some text for testing application"
    },
    {
        id: 6,
        title: "6 thing",
        text: "6 - some text for testing application"
    },
    {
        id: 7,
        title: "7 thing",
        text: "7 - some text for testing application"
    },
    {
        id: 8,
        title: "8 thing",
        text: "8 - some text for testing application"
    },
    {
        id: 9,
        title: "9 thing",
        text: "9 - some text for testing application"
    },
    {
        id: 10,
        title: "10 thing",
        text: "10 - some text for testing application"
    },
    {
        id: 11,
        title: "11 thing",
        text: "11 - some text for testing application"
    },
    {
        id: 12,
        title: "12 thing",
        text: "12 - some text for testing application"
    },
]


function List({isChosen, openList}) {
    const [isOpen, setOpen] = useState(false);

    const openForm = () => {
        setOpen(!isOpen);
    }

    const close = () =>{
        openList && openList();
    }


    return (
        <div className={cn(s.target, {[s.active]: isChosen})}>
                    <RecordForm open={isOpen} openForm={openForm}/>
                    <div className={cn(s.listHead, s.wrapper)}>
                        <Filter/>
                        <Search/>
                    </div>
                    <div className={s.overflow}>
                        {
                            listData.map(({id, title, text}) =>
                                <ListRecord key={id} id={id} title={title} text={text} openForm={openForm}/>
                            )
                        }
                    </div>
                    <div className={cn(s.listFooter, s.wrapper)}>
                        <button className={cn(s.button, s.back)} onClick={close}>
                            Back
                        </button>
                        <button className={cn(s.button, s.add)}>
                            Add
                        </button>
                        <button className={cn(s.button, s.delete)}>
                            Delete selected
                        </button>
                    </div>
        </div>
    );
}

export default List;