import React, { useState, useEffect } from "react";
import AddButton from "./components/AddButton";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import ToogleTasks from "./components/ToogleTasks";
import logo from "./images/logo.png";
//import { arrayTasks } from "./data/tasks";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showCompleteTasks, setShowCompleteTasks] = useState(false);
  //const [tasks, setTasks] = useState(arrayTasks);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getLocalStorage = () => {
      const tasksLS = JSON.parse(localStorage.getItem("tasks")) || [];
      setTasks(tasksLS);
    };
    getLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleCompleteTaskToogle = (id) => {
    const i = tasks.findIndex((item) => item.id === id);
    let newTasks = [...tasks];

    newTasks[i] = {
      ...newTasks[i],
      completed: !newTasks[i].completed,
    };

    setTasks(newTasks);
  };

  const incompleteTasks = tasks.filter((task) => task.completed === false);
  const completeTasks = tasks.filter((task) => task.completed === true);

  return (
    <div className="App">
      <header className="header">
        <img className="header__logo" src={logo} alt="todoisnt logo" />
      </header>

      <div className="main-container">
        <h1 className="main-container__title">Todos</h1>

        <div className="main-container__task">
          {incompleteTasks.map((task) => (
            <Task
              key={task.id}
              content={task.description}
              onCompleteTaskToogle={() => handleCompleteTaskToogle(task.id)}
              currentTask={task}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))}

          {showForm ? (
            <TaskForm
              onCancel={() => setShowForm(false)}
              tasks={tasks}
              setTasks={setTasks}
            />
          ) : (
            <AddButton onClick={() => setShowForm(true)} />
          )}

          {showCompleteTasks ? (
            <ToogleTasks
              text="Hide"
              onClick={() => setShowCompleteTasks(!showCompleteTasks)}
            />
          ) : (
            <ToogleTasks
              text="Show completed"
              onClick={() => setShowCompleteTasks(!showCompleteTasks)}
            />
          )}

          {showCompleteTasks === true &&
            completeTasks.map((task) => (
              <Task
                key={task.id}
                content={task.description}
                onCompleteTaskToogle={() => handleCompleteTaskToogle(task.id)}
                isCompleted={task.completed}
                currentTask={task}
                tasks={tasks}
                setTasks={setTasks}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
