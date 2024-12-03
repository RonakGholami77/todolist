import React, { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import Todo from "./Todo";

function TodoList() {
  const [entry, setEntry] = useState("");
  const [doingList, setDoingList] = useState([]);
  const [select, setSelect] = useState("all");

  function onChangeHandler(e) {
    const res = e.target.value;
    setEntry(res);
  }

  function clickHandler() {
    setDoingList((prev) => {
      return [
        ...prev,
        { id: doingList.length + 1, title: entry, completed: false },
      ];
    });
    setEntry("");
  }

  function removeHandler(id) {
    const newList = doingList.filter((item) => item.id !== id);
    setDoingList(newList);
    // setDoingList((prev) => prev.filter((item) => item.id !== id));
  }

  function editHandler(id) {
    setDoingList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  function selectHandler(e) {
    const newSelect = e.target.value;
    setSelect(newSelect);
  }

  return (
    <div className="main">
      <div className="content">
        <div className="enter">
          <input
            type="text"
            value={entry}
            onChange={(e) => onChangeHandler(e)}
            placeholder="Add a new task"
          />
          <span onClick={clickHandler} className="icon">
            <FaPlusSquare />
          </span>
        </div>
        <select name="doing" id="doing" onChange={selectHandler}>
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <div className="result">
        {doingList.length > 0 &&
          select === "all" &&
          doingList.map((doing) => {
            return (
              <Todo
                key={doing.id}
                {...doing}
                onRemove={removeHandler}
                onEdit={editHandler}
              />
            );
          })}

        {doingList.length > 0 &&
          select === "complete" &&
          doingList
            .filter((item) => item.completed)
            .map((doing) => {
              return (
                <Todo
                  key={doing.id}
                  {...doing}
                  onRemove={removeHandler}
                  onEdit={editHandler}
                />
              );
            })}

        {doingList.length > 0 &&
          select === "incomplete" &&
          doingList
            .filter((item) => !item.completed)
            .map((doing) => {
              return (
                <Todo
                  key={doing.id}
                  {...doing}
                  onRemove={removeHandler}
                  onEdit={editHandler}
                />
              );
            })}
      </div>
    </div>
  );
}

export default TodoList;
