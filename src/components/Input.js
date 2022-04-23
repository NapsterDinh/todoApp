import { useState } from "react";

const Input = ({todoList, setToDoList, test}) => {
    const [ title, setTitle ] = useState('')

    const handleAddNewToDo = () => {
        const temp = [...todoList];
        
        temp.push({
          id: Date.now(),
          title: title,
          isDone: false,
        });
    
        setToDoList(temp);
    
        setTitle('')
      };
    
    return ( 
        <>
            <div className="input-container">
                <input
                onChange={(e) => setTitle(e.target.value.trim())}
                value={title}
                type="text"
                placeholder="Input to do"
                onKeyPress={(e) => {
                    if (e.key === "Enter" && e.target.value !== "") {
                        handleAddNewToDo();
                    }
                }}/>
                <button type="button"
                onClick={() => {
                    title !== '' && handleAddNewToDo()
                }}>
                ⊕
                </button>
            </div>
        </>
     );
}

 
export default Input;