import { useState } from "react";


function List({ tasks, setTasks }) {

    const [search, setSearch] = useState("");
    const [priority, setPriority] = useState("");
    const [status, setStatus] = useState("");


    const filteredTasks = tasks.filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(search.toLowerCase());

      const matchesPriority =
         priority === "" || task.priority === priority;

      const matchesStatus =
        status === "" || task.status === status;

       return matchesSearch && matchesPriority && matchesStatus;
    });


    const handleDelete = (id) => {
        const updatedTasks = tasks.filter(
            (task) => task.id !== id
        );
        setTasks(updatedTasks);

    };

   



    return(
        <div className="min-h-screen p-8 justify-center items-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-white mb-16 mt-36">
              Task List
           </h1>
           <div className="flex justify-center mb-16 flex-col lg:flex-row gap-2 lg:gap-4 lg:items-center md:items-center">
              <input
             className="border rounded-md  mr-56  p-4 text-white h-[60px] w-full max-w-[300px] "
              value={search}
              placeholder="Search By Title"
              onChange={(e) => setSearch(e.target.value)}
            />

           <select
             className="text-white p-4 border rounded-lg w-full max-w-[250px]  "
             value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>

            <select
             className="text-white p-4 border rounded-lg w-full max-w-[250px]  "
             value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
                <option value="">Select Status</option>
                <option value="pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>

           </div>

           




          { filteredTasks.length === 0 ? (
            <h3 className="flex items-center justify-center text-gray-300 lg:text-xl md:text-lg mt-36">
                No Tasks Available
            </h3>
          ) : (
            filteredTasks.map((task) => (
            <div 
            className=" bg-gray-800 rounded-xl gap-4 p-6 mb-16 flex flex-col justify-center items-center"
            key={task.id}>
                <h3 className="bg-green-800 font-poppins font-bold text-lg md:text-3xl lg:text-5xl text-white p-6 mb-6"
                >{task.title}</h3>
                <p className="bg-gray-800 font-medium font-sans text-gray-200 text-sm md:text-base lg:text-lg  mt-2">{task.description}</p> 
                <p className="bg-gray-800 font-medium font-mono text-gray-400 mt-2 text-sm md:text-base lg:text-xl">Due Date: {task.dueDate}</p>
                <p className="bg-gray-800 font-medium font-poppins text-blue-400 mt-2 text-l md:text-xl lg:text-2xl ">Priority: {task.priority}</p> 
                <p className="bg-gray-800 font-medium font-poppins text-blue-400 mt-2 text-l md:text-xl lg:text-2xl">Status: {task.status}</p> 
                <button onClick={() => handleDelete(task.id)}
                 className="bg-gray-300 border rounded-md p-2 mt-8 hover:bg-white">Delete</button>
            </div>
            
          )))
          
        }
        
          

         
        </div>
        




    )
}

export default List;