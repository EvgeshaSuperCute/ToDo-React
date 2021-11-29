import cn from "classnames"

import s from "./recordForm.module.css"

const RecordForm = ({record, open = false, closeForm}) => {

    const {deadline, title, text} = record;
    //console.log("record",rest)
    const date = new Date();
    let time = ` ${date.getDate()}.${(date.getMonth()+1)}.${date.getFullYear()}`;
    const close = () =>{
        closeForm && closeForm();
    }

    return(
        <>
            <div className={cn(s.wrap,{[s.open]: open})}>
                <div className={cn(s.modalForm,{[s.open]: open})}>
                    <h3>
                        {title}
                    </h3>
                    <div className={s.date}>NOW: {time} :: DEADLINE: {deadline}</div>
                    <div className={s.text}>
                        {text}
                    </div>
                <div className={s.buttons}>
                    <button className={cn(s.button, s.edit)} onClick={close}>EDIT</button>
                    <button className={cn(s.button, s.save)} onClick={close}>SAVE</button>
                    <button className={cn(s.button, s.close)} onClick={close}>CLOSE</button>
                </div>
                </div>
            </div>
        </>
    )
}

export default RecordForm;