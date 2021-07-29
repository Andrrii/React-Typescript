import React,{useState,useRef} from 'react';

interface TodoFormProps {
    onAdd(title: string):void
  }
  

const TodoForm: React.FC<TodoFormProps> = (props) => {

    //#region First option usestate
    // const [title,setTitle] = useState<string>("")

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }

    //#endregion

    const ref = useRef<HTMLInputElement>(null)

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === "Enter") {
            //console.log(title)
            //setTitle("")
            props.onAdd(ref.current!.value) // ! - це впевненість що тут все буде добре 
            ref.current!.value = ""
        }
    }

    return (
        <div className = "input-field mt2">
            <input 
               // value = {title}
                ref = {ref}
                type="text" 
                id="title" 
                placeholder="Write here..." 
               // onChange={changeHandler}
                onKeyPress = {keyPressHandler} 
            />
            <label htmlFor="title" className="active">Input your task</label>
        </div>
    )
}

export default TodoForm