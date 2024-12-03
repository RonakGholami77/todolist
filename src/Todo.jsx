import React from "react";
import { FaTrash } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

function Todo(props) {
  const { id, title, completed, onRemove, onEdit } = props;

  function edit(id) {
    onEdit(id);
  }

  function remove(id) {
    onRemove(id);
  }

  return (
    <div>
      <div className={`enter ${completed ? "complete" : ""}`}>
        <input type="text" value={title} />
        <span className="icon" onClick={() => edit(id)}>
          <TiTick />
        </span>
        <span className="icon newback" onClick={() => remove(id)}>
          <FaTrash />
        </span>
      </div>
    </div>
  );
}

export default Todo;
