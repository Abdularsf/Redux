export const Todo = () =>{
    <div className="containet">
        <div className="todo-app">
            <h1>
                <i className="fa-regular"></i>TodoList
            </h1>
            <div className="row">
                <form>
                    <input type="text" id="input-box" placeholder="Add a new Task"/>
                    <button>Add Task</button>
                </form>
            </div>
            <ul className="list-container"></ul>
        </div>
    </div>
}