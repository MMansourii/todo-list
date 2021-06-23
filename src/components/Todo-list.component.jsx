import React from   'react';
import {ToDo} from './ToDo.component';

export const ToDoList = ({toDos,setToDos,completedToDo}) =>{
    console.log(toDos);
    return(
        <div className="todo-container">
        <ul className="todo-list">
            {completedToDo.map(todo => (
                    <ToDo 
                    text={todo.text} 
                    key={todo.id}
                    setToDos={setToDos}
                    toDos={toDos}
                    todo={todo}
                    />
            ))}
            
        </ul>
      </div>
    );
} 