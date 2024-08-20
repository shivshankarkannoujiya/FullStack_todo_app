/* eslint-disable no-unused-vars */
import { useState } from "react"
import {CreateTodo} from "./Components/CreateTodo"
import { Todos } from "./Components/Todos"

function App() {

 const [todos, setTodos] =  useState([])

  // fetch(`http://localhost:3000/todos`)
  // .then( async function(response){
  //   const json = await response.json()
  //   setTodos(json.todos)
  // })
  
  return (
    <>
      <CreateTodo/>
      <Todos
      todos={[]}
      />
    </>
  )
}

export default App
