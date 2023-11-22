import './App.css'
import AddTodo from './component/AddTodo'
import Todos from './component/Todos'

function App() {
  

  return (
    <>
      <h1 className='bg-slate-600 text-white'>Learn Redux</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
