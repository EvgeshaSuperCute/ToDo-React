import cn from "classnames"
import ListRecord from "./listRecord";
import RecordForm from "./recordForm";
import Search from "./tools/search";
import Filter from "./tools/filter";
import AddRecordForm from "./addRecordform";
import {useState, useContext} from "react";
import {ListContext} from "./Context/listContext";
import {useNavigate} from "react-router-dom";


import s from './list.module.css';

const List = ({isChosen, openList, list}) => {
    const [isOpenView, setOpenView] = useState(false);
    const [isOpenAdd, setOpenAdd] = useState(false);
    const {clean, onSetRecord, Record} = useContext(ListContext);
    const navigate = useNavigate();

    const openViewForm = (id) => {
        id--;
        setOpenView(true);
        onSetRecord(list[id]);

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
        <div className={cn(s.target, {[s.active]: isChosen})}>

            <AddRecordForm closeForm={closeAddForm} open={isOpenAdd}/>
            {
                (<RecordForm open={isOpenView} closeForm={closeViewForm} record={Record}/>)
            }
            <div className={cn(s.listHead, s.wrapper)}>
                        <Filter/>
                        <Search/>
                    </div>
                    <div className={s.overflow}>
                        {
                            Object.entries(list).map(([key,{id, title, text}]) =>
                                <ListRecord key={key} id={id} title={title} text={text} openForm={openViewForm}/>
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