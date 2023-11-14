import './CSS/todoitems.css'
import correct from './Assets/correct.jpg'
import cross from './Assets/cross.jpg'
import not_ticked from './Assets/not_ticked.jpg'

const TodoItems = ({no,display,text,deleteTodo,toggle}) => {

    
  return (
    <div className="todoitems">
        <div className={`todoitems-container ${display}`} onClick={() => toggle(no)}>
            {display===""?<img src={not_ticked} alt='' />:<img src={correct} alt='' />}
            <div className="todoitems-text">{text}</div>
        </div>
        <img  className= 'todoitems-cross-icon' onClick={() => {deleteTodo(no)}} src={cross} alt="" />
    </div>
 )
}



export default TodoItems