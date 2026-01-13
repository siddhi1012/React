import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
uuidv4();
import "./TodoList.css";
export default function TodoList() {
    //state vaiable
    let [todos, setTodo] = useState([{ task: "sample task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");
    let addNewTask = () => {
        setTodo((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
        });
        setNewTodo("");
    }
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };
    let deleteTodo = (id) => {
        setTodo((prevTodos) => (todos.filter((prevTodos) => prevTodos.id != id)));
    }
    let markAllDOne = () => {
        setTodo((prevTodos) => (
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    isDone: true
                };
            })
        ));
    }

    let markAsDone = (id) => {
        setTodo((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        isDone: true
                    };
                } else {
                    return todo;
                }
            })
        );
    }


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
                        <li key={todo.id}>
                            <span style={todo.isDone ? { textDecoration: "line-through" } : {}}>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>delete</button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
                        </li>
                    ))}
            </ul>
            <button onClick={markAllDOne}>Mark All DOne</button>

        </div>
    )
}