//import {useState} from "react";

import cn from "classnames"
import s from "./listRecord.module.css"

const ListRecord = ({id, title,text, openForm}) => {

    const changeVisibility = () => {
       openForm && openForm(title,text);
    }

  return(
              <div className={s.record}>
                  <input type="checkbox" className={s.checkbox}/>
                  <label className={s.text}>
                      Record {id}: {title}
                  </label>
                      <button className={cn(s.button,s.open)} onClick={changeVisibility}>open</button>
                      <button className={cn(s.button,s.delete)}>delete</button>

              </div>
  )
}

export default ListRecord;