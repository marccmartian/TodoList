import React from "react";
import plus from "../images/plus.png";

const AddButton = ({ onClick }) => {
  return (
    <button className="add-button" onClick={onClick}>
      <img src={plus} alt="add" />
      <p className="add-button__text">Add task</p>
    </button>
  );
};

export default AddButton;
