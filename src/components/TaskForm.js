import React, { useState } from "react";
import SimpleButton from "./SimpleButton";
import { TrashIcon } from "./icons";
//import { arrayTasks } from "../data/tasks";

//in the line 38 this generating function is used
function* idGenerator() {
  // let lastId = arrayTasks.length;
  let lastId = 0;
  while (true) {
    yield ++lastId;
  }
}

const id = idGenerator();

const TaskForm = ({
  onCancel,
  tasks,
  setTasks,
  currentTask,
  setDisplayUpdateForm,
}) => {
  const [taskDescription, setTaskDescription] = useState(
    currentTask ? currentTask.description : ""
  );

  const handleInputTask = (event) => {
    setTaskDescription(event.target.value);
  };

  const handleCreateTask = (event) => {
    event.preventDefault();
    if (taskDescription.length >= 3) {
      setTasks([
        ...tasks,
        {
          id: id.next().value,
          description: taskDescription,
          completed: false,
        },
      ]);
      setTaskDescription("");
    } else {
      alert("The task should be at least 3 characters long");
    }
  };

  const handleUpdateTask = (tasks, setTasks) => {
    const i = tasks.findIndex((item) => item.id === currentTask.id);
    let newTasks = [...tasks];

    newTasks[i] = {
      ...newTasks[i],
      description: taskDescription,
    };

    setTasks(newTasks);
    setDisplayUpdateForm(false);
  };

  const handleDeleteTask = (id) => {
    const newTasks = tasks.filter((item) => item.id !== id);
    setTasks(newTasks);
  };

  return (
    <form
      className="form-wrapper"
      onSubmit={
        currentTask ? () => handleUpdateTask(tasks, setTasks) : handleCreateTask
      }
    >
      <input
        className="input-task"
        type="text"
        placeholder="Write a todo..."
        autoFocus
        value={taskDescription}
        onChange={handleInputTask}
      />
      <div className="button-wrapper">
        <div>
          <SimpleButton
            textButton={currentTask ? "Update" : "Add"}
            btnType="submit"
          />
          <SimpleButton
            textButton="Cancel"
            bgColor="#fff"
            textColor="black"
            onClick={onCancel}
          />
        </div>
        {currentTask && (
          <TrashIcon onClick={() => handleDeleteTask(currentTask.id)} />
        )}
      </div>
    </form>
  );
};

export default TaskForm;
