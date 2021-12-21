import FirebaseClass from "../service/dataBase";
import {useForm} from "react-hook-form";
import cn from "classnames"

import s from "./addRecordForm.module.css"
import {useContext} from "react";
import {ListContext} from "./Context/listContext";

const AddRecordForm = ({ listKey, open , closeForm}) =>{

    const {register, handleSubmit} = useForm();
    const {addRecord} = FirebaseClass;
    const {addNewRecord} = useContext(ListContext);

    const onSubmit = (data)  => {
        console.log("data:", data, "KEY:", listKey);
        addRecord(data,listKey);
        addNewRecord();
    }

    const date = new Date();
    let time = ` ${date.getDate()}.${(date.getMonth()+1)}.${date.getFullYear()}`;

    const close = () =>{
        closeForm && closeForm();
    }

    return(
        <div className={cn(s.wrap,{[s.open]: open})}>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={cn(s.modalForm,{[s.open]: open})}
                >
                    <input
                    type="text"
                    {...register("title")}
                    />
                    <div className={s.date}>NOW: {time} :: DEADLINE:</div>
                    <input
                        type="date"
                        {...register("deadline")}
                    />
                    <input
                        className={s.text}
                        type="textarea"
                        {...register("text")}
                    />
                     <div className={s.buttons}>
                         <button type="submit"  className={cn(s.button, s.save)} onClick={close}>SAVE</button>
                         <button type="reset" className={cn(s.button, s.close)} onClick={close}>CLOSE</button>
                     </div>
                </form>
        </div>
    )
}

export default AddRecordForm;