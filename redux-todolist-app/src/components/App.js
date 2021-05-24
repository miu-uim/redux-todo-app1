import React,{useState} from 'react';
import {connect} from 'react-redux';

import {addTodo,deleteTodo,doneTodo} from '../actions'//actionCreater関数

const App =(props)=>{
  const[taskItem,setTask]= useState('')
  // const[todos,setTodos]=useState('')

  const createTask = e =>{
    setTask(e.target.value);
  }

  const addTask = ()=>{
    if(taskItem === '') return
    props.addTodo(taskItem)//addTodo(task)
    setTask('')
  }

  const deleteTask = (index)=>{
    props.deleteTodo(index)
    // let newTodos = [...todos]
    //newTodos.splice(index,1)
    //setTodos(newTodos)
  }

  const doneTask = (index)=>{
    props.doneTodo(index)
  }



  return (
    <React.Fragment>
      <h2>TODO List Redux版</h2>
      <input value={taskItem} onChange={createTask}/>
      <button onClick={addTask}>追加</button>
      <ul>
        {props.todos.map((todo,index)=>(
          <li key={index}>
            {todo.flg ? <del>{todo.title}</del> : <span>{todo.title}</span>}
            {todo.flg ? <button onClick={()=>{doneTask(index)}}>未完了</button> :<button onClick={()=>{doneTask(index)}}>完了</button> }
            <button onClick={()=>{deleteTask(index)}}>削除</button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}

const mapStateToProps = state =>({
  todos: state.todoReducer.todos
})
const mapDispatchToProps = dispatch =>({
  addTodo:(task)=>dispatch(addTodo(task)),
  deleteTodo:(index)=>dispatch(deleteTodo(index)),
  doneTodo:(index)=>dispatch(doneTodo(index)),
})

export default connect(mapStateToProps,mapDispatchToProps)(App)