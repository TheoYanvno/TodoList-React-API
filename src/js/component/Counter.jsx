import React from "react";

export const Counter = (props) => {
  const removeAllItems = () => {
    props.setList([]);

    props.updateTodos([{ label: "sample Todo", done: false }]);
  };

  return (
    <div className="navbar px-5 footer">
      <div className="items">{props.list.length} Items Remaining{" "}</div>
      <button className="ms-auto" onClick={() => removeAllItems()}>
        Delete Task List
      </button>
    </div>
  );
};