import { useState, useRef, useEffect } from 'react'
import TodoItems from './todoitems'
import './CSS/todo.css'

let count = 0;

const Todo = () => {

    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null);

    

    const add = () => {
        setTodos([...todos,{no:count++,text:inputRef.current.value,display: ""}]);
        inputRef.current.value="";
        localStorage.setItem("todos_count",count);
    }

    useEffect(()=>{
        setTodos(JSON.parse(localStorage.getItem("todos")))
        count = localStorage.getItem("todos_count")
    },[])

    useEffect(() =>{
        setTimeout(() =>{
            console.log(todos);
            localStorage.setItem("todos",JSON.stringify(todos))
        }, 100)
    },[todos]);

    const toggle = (no) => {
        let data = JSON.parse(localStorage.getItem("todos"))
        for(let i = 0;i < data.length;i++)
        {
            if (data[i].no===no){
                if(data[i].display===""){
                    data[i].display = "line-through";
                }
                else
                {
                    data[i].display = "";
                }
                break;
            }
        }
        localStorage.setItem("todos", JSON.stringify(data));
    };

    const deleteTodo = (no) => {
        let data = JSON.parse(localStorage.getItem("todos"));
        data = data.filter((todos) => todos.no !== no);
        setTodos(data);
        localStorage.setItem("todos", JSON.stringify(data));
    };




  return (
    <div className="todo">
        <div className="todo-header"> To-Do List</div>
        <div className="todo-add">
            <input ref={inputRef} type='text' placeholder='Add Your Task' className='todo-input'/>
            <div onClick={()=>{add()}} className="todo-add-btn"> ADD </div>
        </div>
        <div className="todo-list">
            {todos.map((item,index) => {
                return <TodoItems key={index} deleteTodo={deleteTodo} toggle={toggle} no={item.no} display={item.display} text={item.text}/>
            })}
        </div>
    </div>
  )
}


export default Todo