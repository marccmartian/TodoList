import React from "react";

const ToogleTasks = ({ text, onClick }) => {
  return (
    <div className="toogle-container">
      <button className="toogle-button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default ToogleTasks;
