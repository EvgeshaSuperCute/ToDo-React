import cn from "classnames"
import ListRecord from "./listRecord";
import RecordForm from "./recordForm";
import Search from "./tools/search";
import Filter from "./tools/filter";
import AddRecordForm from "./addRecordform";
import {useState, useContext, useEffect} from "react";
import {ListContext} from "./Context/listContext";
import {useNavigate} from "react-router-dom";


import s from './list.module.css';
import {useSelector} from "react-redux";
import {selectListsData} from "../Redux/listReducer";

const List = ({isChosen, openList, list}) => {
    const [isOpenView, setOpenView] = useState(false);
    const [isOpenAdd, setOpenAdd] = useState(false);
    const dbLists =  useSelector(selectListsData);
    const [item, setItem] = useState({});
    const [render, setRender] = useState(true);
    const {clean, onSetRecord, Record, ListKey} = useContext(ListContext);
    const navigate = useNavigate();
    //setInterval(()=>{console.log(ListKey)},2000)



    useEffect( ()=>{
        setItem(dbLists[ListKey].records);
        console.log("list-update", list);
        console.log("List:",list,"------Item:",item);
        //setRender(!render);
    }, [dbLists])

    const openViewForm = (recordKey) => {
        setOpenView(true);
        onSetRecord(list[recordKey]);

    }

    const closeViewForm = () => {
        setOpenView(false);

    }

    const openAddForm = () => {
        setOpenAdd(true);

    }

    const closeAddForm = () => {
        setOpenAdd(false);

    }

    const close = () =>{
        clean();
        navigate('/')
        openList && openList();
    }


    return (
        <div className={cn(s.wrap/*s.target, {[s.active]: isChosen}*/)}>

            <AddRecordForm listKey={ListKey} closeForm={closeAddForm} open={isOpenAdd}/>
            <RecordForm open={isOpenView} closeForm={closeViewForm} record={Record}/>

            <div className={cn(s.listHead, s.wrapper)}>
                        <Filter/>
                        <Search/>
                    </div>
                    <div className={s.overflow}>
                        {
                            Object.entries(list).map(([key,{id, title, text}]) =>
                                <ListRecord listKey={ListKey}
                                            recordKey={key}
                                            id={id}
                                            title={title}
                                            text={text}
                                            openForm={openViewForm}
                                />
                            )
                        }
                    </div>
                    <div className={cn(s.listFooter, s.wrapper)}>
                        <button className={cn(s.button, s.back)} onClick={close}>
                            Back
                        </button>
                        <button className={cn(s.button, s.add)} onClick={openAddForm}>
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