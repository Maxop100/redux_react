/* eslint-disable no-case-declarations */
const ADD_TASK = "task/add";
const DEL_TASK = "task/del";

const initialState = {
  task: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: // use the constant instead of string
      return {
        ...state,
        task: [...state.task, action.payload],
      };

    case DEL_TASK:
      const updatedTask = state.task.filter((curTask, index) => {
        return index !== action.payload;
      });
      return {
        ...state,
        task: updatedTask,
      };

    default:
     return state;
  }
};

export default taskReducer;
