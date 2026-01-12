import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
uuidv4();
export default function TodoList() {
    //state vaiable
    let [todos, setTodo] = useState([{ task: "sample task", id: uuidv4() }]);
    let [newTodo, setNewTodo] = useState("");
    let addNewTask = () => {
        setTodo([...todos, {task:newTodo ,id:uuidv4()}]);
        setNewTodo("");
    }
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };
    return (
        <div>
            <input type="text"
                placeholder="Add a task"
                value={newTodo}
                onChange={updateTodoValue}
            />
            <br /><br />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><br /><br /><br /><br />
            <hr />
            <h4>Task Todo</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li key="todo.id">{todo.task}</li>
                    ))
                }
            </ul>
        </div>
    )
}