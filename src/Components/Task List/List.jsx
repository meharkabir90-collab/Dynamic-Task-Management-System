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
        <div className="min-h-screen p-8 justify-center items-center bg-gray-900 ">
            <h1 className="text-3xl md:text-4xl bg-gray-900 font-bold text-center  text-white mb-16 mt-36">
              Task List
           </h1>
           <div className="flex justify-center mb-16 bg-gray-900 flex-col lg:flex-row gap-2 lg:gap-4 lg:items-center md:items-center">
              <input
             className="border rounded-md bg-gray-700  mr-56  p-4 text-white h-[60px] w-full max-w-[300px] "
              value={search}
              placeholder="Search By Title"
              onChange={(e) => setSearch(e.target.value)}
            />

           <select
             className="text-white bg-gray-700 p-4 border rounded-lg w-full max-w-[250px]  "
             value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>

            <select
             className="text-white bg-gray-700 p-4 border rounded-lg w-full max-w-[250px]  "
             value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
                <option value="">Select Status</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>

           </div>



           {filteredTasks.length === 0 ? (
  <div className="flex justify-center items-center mt-32">
    <div className="text-center">
      <h2 className="text-3xl">📋</h2>
      <h3 className="text-gray-300 text-xl mt-3 font-semibold">
        No Tasks Found
      </h3>
      <p className="text-gray-500 mt-2">
        Try changing the filters or add a new task.
      </p>
    </div>
  </div>
) : (
  filteredTasks.map((task) => (
    <div
      key={task.id}
      className="max-w-4xl mx-auto bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 mb-8 border border-gray-700"
    >
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-white">
        {task.title}
      </h2>

      {/* Description */}
      <p className="text-gray-300 mt-4 leading-7">
        {task.description || "No description provided."}
      </p>

      {/* Due Date */}
      <div className="mt-5">
        <span className="text-gray-400 font-medium">
          📅 Due Date:
        </span>

        <span className="text-white ml-2">
          {task.dueDate}
        </span>
      </div>

      {/* Priority + Status */}
      <div className="flex flex-wrap gap-3 mt-6">

        {/* Priority */}

        <span
          className={`px-4 py-2 rounded-full text-sm font-semibold text-white
          ${
            task.priority === "High"
              ? "bg-red-600"
              : task.priority === "Medium"
              ? "bg-yellow-500"
              : "bg-green-600"
          }`}
        >
          🚩 {task.priority}
        </span>

        {/* Status */}

        <span
          className={`px-4 py-2 rounded-full text-sm font-semibold text-white
          ${
            task.status === "Completed"
              ? "bg-green-600"
              : task.status === "In Progress"
              ? "bg-blue-600"
              : "bg-orange-500"
          }`}
        >
          ✔ {task.status}
        </span>

      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-8">

        <button
          className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-lg font-medium"
        >
          Edit
        </button>

        <button
          onClick={() => handleDelete(task.id)}
          className="bg-red-600 hover:bg-red-700 transition text-white px-5 py-2 rounded-lg font-medium"
        >
          Delete
        </button>

      </div>
    </div>
     ))
)}

    </div>
  );
}

export default List;
  

           




      

