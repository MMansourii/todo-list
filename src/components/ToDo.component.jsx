import React from 'react'; 

export const ToDo = ({text,todo,toDos,setToDos}) =>{

    const deleteBtnHandler = () =>{
        setToDos(toDos.filter(element => {
            return element.id !== todo.id;
        }));
    }
    const completeBtnHandler = ()=>{
        setToDos(toDos.map(item =>{
            if(item.id === todo.id){
                return {
                    ...item , complete: !item.complete,
                };
            }
            return item;
        })
        );
    }

    return(
        
        <div className="todo">
            <li className={`todo-item ${todo.complete ? 'completed' : ''}`}>{text}</li>
                <button className="complete-btn" onClick={completeBtnHandler}>
                    <i className="fas fa-check"></i>
                </button>
                <button className="trash-btn" onClick={deleteBtnHandler}>
                    <i className="fas fa-trash"></i>
                </button>
            
        </div>
    );
};