import cn from "classnames"
import ListRecord from "./listRecord";
import RecordForm from "./recordForm";
import Search from "./tools/search";
import Filter from "./tools/filter";
import {useState, useContext} from "react";
import {ListContext} from "./Context/listContext";


import s from './list.module.css';

function List({isChosen, openList, list}) {
    const [isOpen, setOpen] = useState(false);
    const {clean, onSetRecord, Record} = useContext(ListContext);


    const openForm = (id) => {
        id--;
        setOpen(true);
        onSetRecord(list[id]);

    }

    const closeForm = () => {
        setOpen(false);

    }

    const close = () =>{
        clean();
        openList && openList();
    }


    return (
        <div className={cn(s.target, {[s.active]: isChosen})}>
            {
                isChosen &&
                (<RecordForm open={isOpen} closeForm={closeForm} record={Record}/>)


            }
            <div className={cn(s.listHead, s.wrapper)}>
                        <Filter/>
                        <Search/>
                    </div>
                    <div className={s.overflow}>
                        {
                            isChosen && Object.entries(list).map(([key,{id, title, text}]) =>
                                <ListRecord key={key} id={id} title={title} text={text} openForm={openForm}/>
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