import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux"
import { addToTask, deleteTask } from "../store";
import { applyMiddleware } from "redux";

export const Todo = () => {

    const [task, setTask] = useState("");

    const tasks = useSelector((state) => state.task);

    const dispatch = useDispatch();

    console.log(task);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setTask("");
        return dispatch(addToTask(task));
    }

    const handleTaskDelete = (index) =>{
        return dispatch(deleteTask(index))
    }

    <div className="containet">
        <div className="todo-app">
            <h1>
                <i className="fa-regular"></i>TodoList
            </h1>
            <div className="row">
                <form onSubmit={handleFormSubmit}>
                    <input type="text" id="input-box" placeholder="Add a new Task" value={task} onChange={setTask((e) => e.target.value)} />
                    <button>Add Task</button>
                </form>
            </div>
            <ul className="list-container">
                {
                    tasks.map((curTask, index) => {
                        return (
                            <li key={index}>
                                <p>
                                    {index}:{curTask}
                                </p>
                                <div>
                                    <MdDeleteForever onClick={() => handleTaskDelete(index)} />
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
}