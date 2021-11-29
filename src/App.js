//import logo from './logo.svg';
import cn from "classnames"
import List from "./components/list";
import Lists from "./components/lists";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ListContext} from "./components/Context/listContext";
import {getListsAsync, selectListsData} from "./Redux/listReducer";


import s from './App.module.css';

const App =  () =>   {
    const [isChosen, setChosen] = useState(false);
    const [lists, setLists] = useState({});
    const [item, setItem] = useState({});
    const dbLists =  useSelector(selectListsData);
    const dispatch = useDispatch();
    const [record, setRecord] = useState({});

    useEffect(   ()=>{
          dispatch(getListsAsync());
    },[dispatch])

    useEffect(()=>{
        setLists(dbLists)
    },[dbLists])

    const activateList =  (id = null) =>{
        if(id !== null)
        setItem(lists[id].records);
        setChosen(!isChosen);
    }

    const handleSetRecord = (data) =>
    {
        //console.log("DATA-Context:",data)
        setRecord(data)

    }

    const clearContext = () =>{
        setRecord({})
    }


    return (
        <ListContext.Provider value = {{
            Record: record,
            onSetRecord:handleSetRecord,
            clean: clearContext


        }}>
            <div className={s.App}>
                <h2 className={s.h2}>
                    <img className={s.img} src="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/gnome-todo-icon.png" alt=''/>
                    ToDo.
                </h2>
            <div className={cn(s.list)}>
                    <List isChosen={isChosen} openList={activateList} list={item} />

                    <Lists isChosen={isChosen} chosenItem={activateList} dbLists={lists}/>

            </div>
        </div>

            </ListContext.Provider>
    );
}

export default App;
