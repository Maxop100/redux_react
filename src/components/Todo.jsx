export const Todo = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          <i className="fa-solid fa-list-check mr-2 text-blue-500"></i>
          Todo List
        </h1>

        <div>
          <form className="flex gap-2">
            <input
              type="text"
              placeholder="Enter a task..."
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Add Task
            </button>
          </form>
        </div>

        <ul id="task-list" className="mt-5 space-y-2">
          
        </ul>
      </div>
    </div>
  );
};
