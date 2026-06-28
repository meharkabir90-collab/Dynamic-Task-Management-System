import { useEffect, useState } from 'react'
import './App.css'
import Add from './Components/Add Task/Add'
import Navbar from './Components/Navigation Bar/Navbar'
import List from './Components/Task List/List'
import Error from './Components/Error/Error'
import { Routes, Route } from 'react-router-dom'





function App() {
  const [tasks, setTasks] = useState([]);
  

  useEffect( () => {
     const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
     
     setTasks(savedTasks);

  }, []);

  useEffect( () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    
    

  },[tasks]);

  

  

  return (
    <>
    <Navbar />

    <Routes>
      <Route
        path='/'
        element={
          <Add  tasks={tasks} setTasks={setTasks} />      
        }
      />
    

      <Route
        path='/read'
        element={
              <List  tasks={tasks} setTasks={setTasks}  />
        }
        
             
      />

      <Route
        path='*'
        element={
          <Error />
        }
      
      />
    </Routes>
    
    
    
    
    
    </>
  )
}

export default App;
