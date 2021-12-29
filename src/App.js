//import logo from './logo.svg';
import cn from "classnames"
import List from "./components/list";
import Lists from "./components/lists";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ListContext} from "./components/Context/listContext";
import {getLists, getListsAsync, selectListsData} from "./Redux/listReducer";
import {useLocation, Route, Redirect, Routes} from "react-router-dom";

import FirebaseClass  from "./service/dataBase.js";

import s from './App.module.css';

const rr = {
    "deadline": "23.07.2022",
        "id": 1,
        "text": "1 - some text for testing application",
        "title": "1 thing"
};


const App =  () =>   {
    const [isChosen, setChosen] = useState(false);
    const [lists, setLists] = useState({});
    const [item, setItem] = useState({});
    const dbLists=  useSelector(selectListsData);
    const dispatch = useDispatch();
    const [listKey, setKey] = useState('');
    const [record, setRecord] = useState({});


    const [render, setRender] = useState(true);

    function upd(){
        setRender(!render);
        console.log("!@#$%");
        //check data by console log dbLists and other
    }

    const {addList, addRecord, removeList, removeRecord, getListSocket} = FirebaseClass;
    //console.log('#',listKey)
    useEffect(   ()=>{
        dispatch(getLists())
          //dispatch(getListsAsync());
          //console.log("update");
    },[])

    useEffect(()=>{
        setLists(dbLists);
        console.log("update");
        //console.log("lists:",dbLists)
    },[dbLists])

    const activateList =  (key = null) =>{
        if(key !== null){
            setKey(key);
            setItem(lists[key].records);
        }
        setChosen(!isChosen);
    }

    const handleSetRecord = (data) =>
    {
        setRecord(data)

    }

    const clearContext = () =>{
        setRecord({});
        //setKey(null);
    }

    const handleAddNewRecord = (data,listKey) =>{
        addRecord(data,listKey);
        //dispatch(getListsAsync())
        setKey(listKey);
        setItem(lists[listKey].records);

    }

    const handleDeleteChosenRecord = (listKey, recordKey) =>{
        removeRecord(listKey, recordKey);
        //dispatch(getListsAsync())
        setKey(listKey);
        setItem(lists[listKey].records);
    }


    return (
            <ListContext.Provider value = {{
                Record: record,
                ListKey: listKey,
                ListItem: item,
                ListsContext: lists,
                addNewRecord: handleAddNewRecord,
                deleteChosenRecord: handleDeleteChosenRecord,
                onSetRecord:handleSetRecord,
                clean: clearContext


            }}>
                <button  onClick={upd}>UPD</button>
                <div className={s.App}>
                    <h2 className={s.h2}>
                        <img className={s.img} src="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/gnome-todo-icon.png" alt=''/>
                        ToDo.
                    </h2>
                    <div className={cn(s.list)}>
                        <Routes>
                            <Route path="/" element={<Lists isChosen={isChosen} chosenItem={activateList}/>}/>
                            <Route path="/list" element={<List isChosen={isChosen} openList={activateList}/>}/>
                        </Routes>
                    </div>
                </div>
            </ListContext.Provider>

    );
}

export default App;


// <List isChosen={isChosen} openList={activateList} list={item} />
//
// <Lists isChosen={isChosen} chosenItem={activateList} dbLists={lists}/>