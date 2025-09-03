import { createStore } from "redux";

/* eslint-disable no-case-declarations */
const ADD_TASK = "task/add";
const DEL_TASK = "task/del";

const initialState = {
  task: [],
  isLoading:false,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: [...state.task, action.payload], // adds new task
      };

    case DEL_TASK:
      return {
        ...state,
        task: state.task.filter((_, index) => index !== action.payload), 
        // cleaner: use "_" since we don’t use the first param
      };

    default:
      return state;
  }
};

export default taskReducer;


export const store = createStore(taskReducer);
console.log(store);
console.log(store.getState());

const addTask =(data)=>{
  return {
    type: ADD_TASK,
    payload: data,
  };
}


const delTask =(index)=>{
  return {
    type: DEL_TASK,
    payload: index,
  };
}

store.dispatch(addTask("buy apple"));
console.log("updated state",store.getState());



store.dispatch(addTask("buy mango"));
console.log("updated state",store.getState());

store.dispatch(delTask(0));
console.log("updated state",store.getState());








