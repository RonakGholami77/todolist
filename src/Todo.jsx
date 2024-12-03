import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

function Todo(props) {
  const [status, setStatus] = useState("incomplete");

  const { value, onComplete, list } = props;

  function tickHandler() {
    setStatus("complete");
  }

  function removeHandler() {
    const newList = list.filter((item) => item !== value);
    onComplete(newList);
  }

  return (
    <div>
      <div className="enter" id={status}>
        <input type="text" value={value} />
        <span className="icon">
          <TiTick onClick={tickHandler} />
        </span>
        <span className="icon newback">
          <FaTrash onClick={removeHandler} />
        </span>
      </div>
    </div>
  );
}

export default Todo;
