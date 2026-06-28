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
      <div className="min-h-screen  bg-gradient-to-br from-gray-900 to-gray-800 flex justify-center items-center px-4 py-10">
      <div className="w-full mt-36 max-w-xl bg-gray-800 rounded-2xl shadow-2xl p-8">

        {/* Heading */}
        <div className="flex flex-col items-center justify-center text-center mb-8 h-[100px]">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Create New Task
          </h1>

          <p className="text-gray-300 mt-2">
            Organize your work efficiently.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-5">

          {/* Task Title */}
          <div>
            <label className="block text-gray-100 mb-2">
              Task Title
            </label>

            <input
              type="text"
              placeholder="Enter task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border border-gray-600 bg-gray-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-100 mb-2">
              Description
            </label>

            <textarea
              rows="4"
              placeholder="Enter task description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-lg border border-gray-600 bg-gray-700 text-white px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Due Date & Priority */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="block text-gray-100 mb-2">
                Due Date
              </label>

              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full rounded-lg border border-gray-600 bg-gray-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-gray-100 mb-2">
                Priority
              </label>

              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full rounded-lg border border-gray-600 bg-gray-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              >
                <option value="">Select Priority</option>
                <option value="Low">🟢 Low</option>
                <option value="Medium">🟡 Medium</option>
                <option value="High">🔴 High</option>
              </select>
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="block text-gray-100 mb-2">
              Task Status
            </label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full rounded-lg border border-gray-600 bg-gray-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="">Select Status</option>
              <option value="Pending">🟠 Pending</option>
              <option value="In Progress">🔵 In Progress</option>
              <option value="Completed">🟢 Completed</option>
            </select>
          </div>

          {/* Button */}
          <button
            onClick={handleAdd}
            disabled={!title || !priority || !status}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition duration-200 active:scale-95"
          >
            Add Task
          </button>

        </div>
      </div>
    </div>
        
    )
}

export default Add;