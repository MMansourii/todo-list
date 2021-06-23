import './App.css';
import React ,{Component, useState,useEffect} from 'react';
// Import form and todo list
import {Form} from './components/Form.component';
import { ToDoList } from './components/Todo-list.component';

function App() {
  // States
   const [inputText,setInputText] = useState('');
   const [toDos,setToDos] = useState([]);
   const [status,setStatus] = useState('all');
   const [completedToDo,setCompletedToDo] = useState([]);

   useEffect(()=>{
    getFromLocalStorage();
   },[])

  //  USE EFFECT
  useEffect(()=>{ 
    completedHandler();
    saveToLocalStorage();
  },[toDos,status]);
// Savt to local storage
const saveToLocalStorage = () =>{
  localStorage.setItem('ToDO',JSON.stringify(toDos));
};
// Get From Local Storage
const getFromLocalStorage = ()=>{
  if(localStorage.getItem('ToDO') === null ){
    localStorage.setItem('ToDo' ,JSON.stringify([]) );
  }
  else{
    let savedToDo = JSON.parse(localStorage.getItem('ToDO'));
    setToDos(savedToDo);
  }
};
  
// Functions
   const completedHandler = () =>{
     switch(status){
       case 'completed':
        setCompletedToDo(toDos.filter(item => item.complete === true))
          break;
       case 'uncompleted':
        setCompletedToDo(toDos.filter(item => item.complete === false))
          break;
          default:
            setCompletedToDo(toDos);
     }
   };

  return (
    <div className="App">
      <header> <h1> Mohammad's ToDo List </h1></header>
       <Form 
          inputText={inputText}  
          setInputText={setInputText} 
          toDos={toDos} 
          setToDos={setToDos} 
          setStatus={setStatus}
          />
       <ToDoList 
       toDos={toDos} 
       setToDos={setToDos}
       completedToDo={completedToDo}
       />
    </div>
  );
}

export default App;
