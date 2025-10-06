import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useSelector,useDispatch } from "react-redux";
import { addTask, delTask, fetchTask } from "../store";
export const Todo = () => {
  const [task,setTask]= useState("");

  const tasks = useSelector((state) => state.task);

  const dispatch = useDispatch();


  const handleFormSubmit=(e)=>{
    e.preventDefault();
    dispatch(addTask(task));
    setTask('');
  }

  const handleFetchTask=()=>{
    dispatch(fetchTask());
  }
    



  const handleDelete=(index)=>{
    return dispatch(delTask(index));
  }





  console.log(tasks);
  return (
    <div className="flex bg-gray-600 justify-center items-center min-h-screen">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          <i className="fa-solid fa-list-check mr-2 text-blue-500"></i>
          Todo List
        </h1>

        <div>
          <form className="flex gap-2" onSubmit={handleFormSubmit}>
            <input
          value={task} // controlled input
          onChange={(e) => setTask(e.target.value)}
          type="text"
          placeholder="Enter a task..."
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
            <button
            disabled={!task.trim()}
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Add Task
            </button>
          </form>
        </div>

        <button className="mt-4 text-sm text-gray-500 hover:underline" onClick={handleFetchTask}>
          Click for Sample Task
        </button>

        <ul id="task-list" className="mt-5 space-y-2">
          {
            tasks.map((curTask,index)=>{
              return (<li key={index}  className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm  hover:bg-red-200 transition">
                
              <span className="text-gray-700 ">{index+1}:  {curTask}</span>
              <button onClick={() => handleDelete(index)} className="text-red-500 hover:text-red-700">
                <MdDeleteForever />
              </button>
            </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
};
