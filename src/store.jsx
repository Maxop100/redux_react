import { createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';

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


export const store = createStore(taskReducer,composeWithDevTools());
//console.log(store);
//console.log(store.getState());

export const addTask =(data)=>{
  return {
    type: ADD_TASK,
    payload: data,
  };
}


export const delTask =(index)=>{
  return {
    type: DEL_TASK,
    payload: index,
  };
}



//store.dispatch(delTask(0));
//console.log("updated state",store.getState());








