import { useState } from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeesList.jsx';
import NotFound from './components/NotFound.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';
import AddEmployee from './components/AddEmployee.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <div>
        <div>
          <Switch>
            <Route exact path="/" component={EmployeeList} />
            <Route path="/add" component={AddEmployee} />
            <Route path="/employees/edit/:id" component={AddEmployee} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
