import cn from "classnames"

import s from "./listRecord.module.css"
import FirebaseClass from "../service/dataBase";
import {useContext} from "react";
import {ListContext} from "./Context/listContext";

const ListRecord = ({recordKey, listKey,id = null, title = "", openForm}) => {

    const {removeRecord} = FirebaseClass;
    const {deleteChosenRecord} = useContext(ListContext);


    const deleteRecord = () =>{
        removeRecord(listKey, recordKey);
        deleteChosenRecord();
        console.log(listKey);
    }

    const changeVisibility = () => {
       openForm && openForm(recordKey);
    }

  return(
              <div className={s.record}>
                  <input type="checkbox" className={s.checkbox}/>
                  <label className={s.text}>
                      Record {id}: {title}
                  </label>
                      <button className={cn(s.button,s.open)} onClick={changeVisibility}>open</button>
                      <button className={cn(s.button,s.delete)} onClick={deleteRecord}>delete</button>

              </div>
  )
}

export default ListRecord;