
import cn from "classnames"
import s from "./recordForm.module.css"

const RecordForm = ({id, title, text, open, openForm}) => {

    console.log("@@@",title);
    const close = () =>{
        openForm && openForm(title);
    }
    return(
        <>
            <div className={cn(s.wrap,{[s.open]: open})}>
                <div className={cn(s.modalForm,{[s.open]: open})}>
                    <div>
                    <h2>
                        thing
                    </h2>
                    <p>
                        some text for testing application
                    </p>
                    </div>
                    <button className={cn(s.button, s.close)} onClick={close}>CLOSE</button>
                </div>
            </div>
        </>
    )
}

export default RecordForm;