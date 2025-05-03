import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function ToDoComponent() {

    const [task, setTask] = useState('');

    const dispatch = useDispatch();
    const todos = useSelector((state) => state);

    const handleAddTodo = () => {
        if (task.trim()) {
            dispatch({ type: 'ADD_TODO', payload: task });
            setTask('');
        }
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a task"
            />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {
                    todos.length > 0 ? (
                        todos.map((todo) => (
                            <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                                {todo.text}
                                <button onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}>
                                    {todo.completed ? 'Undo' : 'Complete'}
                                </button>
                                <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}>Delete</button>
                            </li>
                        ))
                    )
                        :
                        (
                            <div>Empty List</div>
                        )}
            </ul>
        </div>
    )
}
