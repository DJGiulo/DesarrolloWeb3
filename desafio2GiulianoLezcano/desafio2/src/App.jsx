import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/superhero/bootstrap.min.css'


const App = () => {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask =() => {
    if(newTask.trim() !== ""){
      setTask ([...task, newTask]);
      setNewTask("")
    }
  };

  const deleteTask = (index)=>{
    const updatedTask = task.filter((_, i)=> i !== index);
    setTask(updatedTask)
  }



  return (
    <>
    <div className="container text-center mt-5" style={{ maxWidth: "600px" }}>
      <h1 class="text-center">--to do now--</h1>

      <div class="input-group mb-3">

      <hr className="text-white" />

        <input type="text" 
        className="form-control" 
        placeholder="Add a new task"
        value={newTask}
        onChange={(e)=> setNewTask(e.target.value)}
        aria-label="Recipient's username" 
        aria-describedby="button-addon2"/>

        <button className="btn btn-primary" type="button" id="button-addon2" onClick={addTask}>Add task</button>

        <ul className="list-group">
          {task.map((task, index)=>(
            <li key={index}
            className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white mb-2">
              {task}
              <button className="btn btn-outline-light btn-sm"
                      onClick={()=> deleteTask(index)}>
              <i className="bi bi-trash"></i>{}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  )
}

export default App
