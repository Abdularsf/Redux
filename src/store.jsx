import {createStore} from "redux";

const ADD_TASK = "task/add"
const DELETE_TASK = "task/delete"

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
    
        default: 
            return state
    }
}

const store = createStore(taskReducer);
console.log(store)


store.dispatch(addToTask("losers"));
console.log(store.getState());

store.dispatch(addToTask("ARSF CODEING"));
console.log(store.getState());

store.dispatch(deleteTask(1));
console.log(store.getState());

const addToTask = (data) =>{
    return {type:ADD_TASK,payload:data}
}
const deleteTask = (id) =>{
    return {type:DELETE_TASK,payload:id}
}