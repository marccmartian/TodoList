import React from "react";

const SimpleButton = ({
  textButton,
  bgColor = "#2d3748",
  textColor = "#fff",
  btnType = "button",
  onClick,
}) => {
  const styles = {
    backgroundColor: `${bgColor}`,
    color: `${textColor}`,
  };

  return (
    <button
      className="simple-button"
      style={styles}
      type={btnType}
      onClick={onClick}
    >
      {textButton}
    </button>
  );
};

export default SimpleButton;
