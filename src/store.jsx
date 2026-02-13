import {applyMiddleware, compose, createStore} from "redux";
import { thunk } from "redux-thunk";

// import {composeWithDevTools} from "@redux-devtools/extention"
const ADD_TASK = "task/add"
const DELETE_TASK = "task/delete"
const FETCH_TASKS = "task/fetch"

const initialState ={
    task:[],
}

const taskReducer = (state = initialState,action) =>{
    switch (action.type) {
        case ADD_TASK:
            return{
                ...state,
                task:[...state.task,action.payload],
            };
        case DELETE_TASK:
            const updatedTask = state.task.filter((curTask , index) =>{
                return index != action.payload;
            })
            return{
                ...state,
                task:updatedTask,
            };
        case FETCH_TASKS:
            return{
                ...state,
                task:[...state.task, ...action.payload],
            }
    
        default: 
            return state
    }
}

export const store = createStore(taskReducer,applyMiddleware(thunk));
console.log(store)

export const addToTask = (data) =>{
    return {type:ADD_TASK,payload:data}
}
export const deleteTask = (id) =>{
    return {type:DELETE_TASK,payload:id}
}

export const fetchTask = () =>{
    return async (dispatch) => {
        try {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/todos?_limit=3"
            );

            const task = await res.json();
            dispatch({type:FETCH_TASKS,payload:task.map((curTask) => curTask.title)})
        } catch (error) {
            
        }
    }
}

store.dispatch(addToTask("losers"));
store.dispatch(addToTask("as"));
store.dispatch(addToTask("yt"));
console.log(store.getState());

store.dispatch(addToTask("ARSF CODEING"));
console.log(store.getState());

store.dispatch(deleteTask(1));
console.log(store.getState());
