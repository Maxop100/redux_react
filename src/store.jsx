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


const store = createStore(taskReducer);
console.log(store);
console.log(store.getState());




store.dispatch({type:ADD_TASK,payload:"Learn Redux Toolkit"});
console.log("updated state",store.getState());



store.dispatch({type:ADD_TASK,payload:"buy mango"});
console.log("updated state",store.getState());




store.dispatch({type:DEL_TASK,payload:1});
console.log("updated state",store.getState());