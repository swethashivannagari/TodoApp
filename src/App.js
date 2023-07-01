import logo from './logo.svg';
import './App.css';
import RootLayout from './RootLayout'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Addtodo from './components/addtodo/Addtodo'
import Todolist from './components/todolist/Todolist'
import Completedtasks from './components/completedtasks/Completed';
import Completed from './components/completedtasks/Completed';




function App() {

const router=createBrowserRouter([
 { path:"/",
  element:<RootLayout/>,
  children:[
    {
      path:"/",
      element:<Addtodo/>
    },
    {
      path:"/todolist",
      element:<Todolist/>

    },
    {
      path:"/completedtasks",
      element:<Completed/>

    },
    
  ],
},
])

  return (
    <div className="App">
      <RouterProvider router={router}/>
      
    </div>
  );
}

export default App;
