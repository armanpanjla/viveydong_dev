import React, { useState } from "react";
import { Plus, Trash2, CheckCircle, Circle } from "lucide-react";

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");

    // Add Task
    const addTask = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const newTask = {
            id: Date.now(),
            text: inputValue,
            completed: false,
        };

        setTasks([...tasks, newTask]);
        setInputValue("");
    };

    // Toggle Complete
    const toggleTask = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div >
            <h1>My Tasks</h1>

            {/* Add Task */}
            <form onSubmit={addTask}>
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add a task..."
                />
                <button type="submit">
                    <Plus size={20} />
                </button>
            </form>

            {/* Task List */}
            <div>
                {tasks.map((task) => (
                    <div key={task.id}>
                        <div onClick={() => toggleTask(task.id)}>
                            {task.completed ? (
                                <CheckCircle size={20} />
                            ) : (
                                <Circle size={20} />
                            )}
                            <span>
                                {task.completed ? <s>{task.text}</s> : task.text}
                            </span>
                        </div>

                        <button onClick={() => deleteTask(task.id)}>
                            <Trash2 size={18} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
