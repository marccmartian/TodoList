import React, { useState } from "react";
import TaskForm from "./TaskForm";
import { RadioIcon, CheckRadioIcon } from "./icons";

const Task = ({
  content,
  onCompleteTaskToogle,
  isCompleted,
  currentTask,
  tasks,
  setTasks,
}) => {
  const [showCheckHover, setShowCheckHover] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  return (
    <div
      className={`task-container ${isCompleted && "task-container--opaque"}`}
    >
      {showUpdateForm ? (
        <TaskForm
          onCancel={() => setShowUpdateForm(false)}
          currentTask={currentTask}
          tasks={tasks}
          setTasks={setTasks}
          setDisplayUpdateForm={setShowUpdateForm}
        />
      ) : (
        <>
          <div
            className="task-container__image"
            onMouseEnter={() => setShowCheckHover(true)}
            onMouseLeave={() => setShowCheckHover(false)}
            onClick={onCompleteTaskToogle}
          >
            {isCompleted ? (
              <CheckRadioIcon className="check-radio__opaque" />
            ) : showCheckHover ? (
              <CheckRadioIcon />
            ) : (
              <RadioIcon />
            )}
          </div>
          <p
            className={isCompleted && "task-container__text--opaque"}
            onClick={() => setShowUpdateForm(true)}
          >
            {content}
          </p>
        </>
      )}
    </div>
  );
};

export default Task;
