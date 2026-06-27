import { useState } from "react";
import { useNavigate } from "react-router-dom";





function Add({ tasks, setTasks }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [priority, setPriority] = useState("");
    const [status, setStatus] = useState("");

    const navigate = useNavigate();

    function handleAdd() {
        const newTask = {
            id: Date.now(),
            title,
            description,
            dueDate,
            priority,
            status
        }

   setTasks([...tasks, newTask])

   navigate('/read')

  
};


    return(
        <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-8  h-[750px] md:h-[850px] lg:h-[1000px]">
          
            <label className="text-4xl md:text-6xl lg:text-7xl  font-bold text-center text-white mb-10 mt-56"> Add Task:   </label>
              <h2 className="text-white">You can Add and Edit your Task</h2>
                <input 
                className="border rounded-md ml-16 mr-16  p-4 text-white lg:h-[60px] h-[40px] w-[200px] md:w-[300px] lg:w-[300px]"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your Task" 
                value={title}             
                
               />  

            <input
              className="border rounded-md ml-16 mr-16  p-4 text-white lg:h-[60px] h-[40px] w-[200px] md:w-[300px] lg:w-[300px]"
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

<input
  className="border rounded-md ml-16 mr-16  p-4 text-white lg:h-[60px] h-[40px] w-[200px] md:w-[300px] lg:w-[300px]"
  type="date"
  value={dueDate}
  onChange={(e) => setDueDate(e.target.value)}
/>

<select
  className="text-white p-2 lg:p-4 border rounded-lg
  hover:bg-black"
  value={priority}
  onChange={(e) => setPriority(e.target.value)}
>
  <option value="">Select Priority</option>
  <option value="Low">Low</option>
  <option value="Medium">Medium</option>
  <option value="High">High</option>
</select>    

<select
  className="text-white p-2 lg:p-4 border rounded-lg
  hover:bg-black"
  value={status}
  onChange={(e) => setStatus(e.target.value)}
>
  <option value="">Select Task Status</option>
  <option value="Pending">Pending</option>
  <option value="In Progress">In Progress</option>
  <option value="Completed">Completed</option>
</select>  
          
            <button
            onClick={handleAdd} 
            className="border rounded-md flex justify-center items-center text-white font-medium bg-gray-800 lg:w-[120px] w-[90px]  h-[40px]
             hover:bg-black" 
            > 
                Add Task
            </button >
        </div>
        
    )
}

export default Add;