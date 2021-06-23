import React from 'react';

export const Form = ({setInputText,setToDos,toDos,inputText,setStatus}) =>{

    const inputTextHandler = (event) =>{
        setInputText(event.target.value);
    }
    const submitToDoHandler = (event) =>{
        event.preventDefault();
        setToDos ([
            ...toDos,
            {text: inputText , complete:false, id: Math.floor(Math.random() *1000)}
        ]);
        setInputText('');
    };
    const statusHandler = (event) =>{
      setStatus(event.target.value);
  };
    return(
        <form>
        <input 
                value={inputText}
                onChange={inputTextHandler}  
                type="text" 
                className="todo-input" />
        <button className="todo-button" type="submit" onClick = {submitToDoHandler} >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo" onChange={statusHandler}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
}