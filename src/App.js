//import logo from './logo.svg';

import s from './App.module.css';
import {useState} from "react";

import cn from "classnames"
import List from "./components/list";
import Lists from "./components/lists";

function App() {
    const [isChosen, setChosen] = useState(false);

    const activateList = () =>{
        setChosen(!isChosen);
    }

    return (
        <>
            <div className={s.App}>
                <h2 className={s.h2}>
                    <img className={s.img} src="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/gnome-todo-icon.png" alt=''/>
                    ToDo.
                </h2>
            <div className={cn(s.list)}>
                <List isChosen={isChosen} openList={activateList}/>
                    <Lists isChosen={isChosen} chosenItem={activateList}/>

            </div>
        </div>

            </>
    );
}

export default App;
