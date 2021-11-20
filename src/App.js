//import logo from './logo.svg';

import s from './App.module.css';
import {useState} from "react";

//import cn from "classnames"
import ListRecord from "./components/listRecord";
import RecordForm from "./components/recordForm";

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


function App() {
    const [isOpen, setOpen] = useState(false);
    let someTitle = null;

    const openForm = (title) => {
      setOpen(!isOpen);
      someTitle = title;
    }


    return (
        <>

            <div className={s.App}>
                <h2 className={s.h2}>
                    <img className={s.img} src="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/gnome-todo-icon.png" alt=''/>
                    ToDo.
                </h2>
            <div className={s.list}>
                <RecordForm title={someTitle} open={isOpen} openForm={openForm}/>
                <div className={s.listHead}>
                    [Filter] [Search]
                </div>
                <div className={s.overflow}>
                    {
                        listData.map(({id, title, text}) =>
                            <ListRecord key={id} id={id} title={title} text={text} openForm={openForm}/>
                        )
                    }
                </div>
                <div className={s.listFooter}>
                    [Add] [Delete.selected]
                </div>
            </div>
        </div>

            </>
    );
}

export default App;
