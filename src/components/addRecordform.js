import cn from "classnames"

import s from "./addRecordForm.module.css"

const AddRecordForm = ({ open = true, closeForm}) =>{

    const date = new Date();
    let time = ` ${date.getDate()}.${(date.getMonth()+1)}.${date.getFullYear()}`;
    const close = () =>{
        closeForm && closeForm();
    }

    return(
        <div className={cn(s.wrap,{[s.open]: open})}>
            <div className={cn(s.modalForm,{[s.open]: open})}>
                <h3>
                    <input type="text"/>
                </h3>
                <div className={s.date}>NOW: {time} :: DEADLINE: <input type="date"/> </div>
                <input type="text"/>
                <div className={s.buttons}>
                    <button className={cn(s.button, s.save)} onClick={close}>SAVE</button>
                    <button className={cn(s.button, s.close)} onClick={close}>CLOSE</button>
                </div>
            </div>
        </div>
    )
}

export default AddRecordForm;