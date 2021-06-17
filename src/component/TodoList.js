import React, {useState} from 'react';
import TodoForm from './TodoForm';

function TodoList() {
    const [tasks, setTasks] = useState([]);//pass in empty array

    const addTask = task => { // function to add a todo item
        if(!task.text || /^\s*$/.test(task.text)) { //got this from stackoverflow
            return
        }

        const newTasks = [task, ...tasks]

        setTasks(newTasks);
        console.log(...tasks);//passing in data from tasks and shows on console
    };

    return (
        <div>
            <h1>Todays Tasks</h1>
            <TodoForm onSubmit={addTask} />
        </div>
    )
}

export default TodoList
