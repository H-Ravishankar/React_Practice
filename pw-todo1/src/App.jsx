import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'

function App() {
const list = [
  {id: 1, todoData: "todo 1"},
  {id: 2, todoData: "todo 2"}
]

  return (
    <>
     <AddTodo/>
     <TodoList list={list}/>
    </>
  )
}

export default App
