import React, { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import Todo from "./Todo";

function TodoList() {
  const [entry, setEntry] = useState("");
  const [doingList, setDoingList] = useState(["react"]);

  function onChangeHandler(e) {
    const res = e.target.value;
    setEntry(res);
  }

  function clickHandler() {
    setDoingList((prev) => {
      return [...prev, entry];
    });
    setEntry("");
  }

  return (
    <div className="main">
      <div className="content">
        <div className="enter">
          <input
            type="text"
            value={entry}
            onChange={(e) => onChangeHandler(e)}
          />
          <span onClick={clickHandler} className="icon">
            <FaPlusSquare />
          </span>
        </div>
        <select name="doing" id="doing">
          <option value="complete">Complete</option>
          <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <div className="result">
        {doingList.length > 0 &&
          doingList.map((doing) => {
            return (
              <Todo list={doingList} value={doing} onComplete={setDoingList} />
            );
          })}
      </div>
    </div>
  );
}

export default TodoList;
