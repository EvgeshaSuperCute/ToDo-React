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

const List = ({isChosen, openList}) => {
    const [isOpenView, setOpenView] = useState(false);
    const [isOpenAdd, setOpenAdd] = useState(false);
    const dbLists =  useSelector(selectListsData);
    const {clean, onSetRecord, Record, ListKey, ListItem} = useContext(ListContext);
    const [render, setRender] = useState(true);
    const navigate = useNavigate();

    //console.log("###:",ListItem);

    useEffect( ()=>{
        console.log("Item:",ListItem);
    }, [])

    const openViewForm = (recordKey) => {
        setOpenView(true);
        onSetRecord(ListItem[recordKey]);

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

    const useRender = () =>{
        setRender(!render);
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
                        Object.entries(ListItem).map(([key, {id, title, text}]) =>
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
                    <button className={cn(s.button, s.delete)} onClick={setRender}>
                        Delete selected
                    </button>
                </div>
            </div>
        );

}

export default List;