const ToDoList = ({todoList, setToDoList}) => {
    const toggleDone = (item) => {
        const temp = [...todoList];

        const result = temp.findIndex((t) => t.id === item.id);
    
        temp.splice(result, 1, {
          ...temp[result],
          isDone: !temp[result].isDone,
        });
    
        setToDoList(temp);
      };
    
    const handleDelete = (item) => {
      const temp = [...todoList];
  
      const result = temp.findIndex((t) => t.id === item.id);
  
      temp.splice(result, 1);
  
      setToDoList(temp);
    };

    return ( 
        <>
            <ul className="todo-list">
            {todoList?.map((item, index) => (
            <TodoItem
                key={index}
                item={item}
                toggleDone={toggleDone}
                handleDelete={handleDelete}
            />
            ))}
        </ul>
        </>
     );
}

const TodoItem = ({ item, toggleDone, handleDelete }) => {
    return (
      <li className={item.isDone ? "todo-item done" : "todo-item"}>
        <span onClick={() => toggleDone(item)} className="todo-item-title">
          {item.isDone ? item.title + " (completed)" : item.title}
        </span>
        <span className="button-delete" onClick={() => handleDelete(item)}>X</span>
      </li>
    );
  };
 
export default ToDoList;