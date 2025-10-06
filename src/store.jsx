import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import {thunk} from "redux-thunk";

/* eslint-disable no-case-declarations */
const ADD_TASK = "task/add";
const DEL_TASK = "task/del";
const FETCH_TASK="task/fetch";

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
    case FETCH_TASK:
      return {
        ...state,
        task: [...state.task,...action.payload],
      };

    default:
      return state;
  }
};

export default taskReducer;


export const store = createStore(taskReducer,composeWithDevTools(applyMiddleware(thunk)));
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







export const fetchTask=()=>{
  return async (dispatch)=>{
    try{
      const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3");
      const task = await res.json();
      console.log(task);
      dispatch({type:FETCH_TASK,payload:task.map(curTask=>curTask.title)});
    }catch(error){
      console.log(error);
    }
  }
}
