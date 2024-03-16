import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../redux/actions";

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;
    addTask({ id: new Date().getTime(), name: taskName, completed: false });
    setTaskName("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-lime-600 rounded-lg w-[60vw]"
    >
      <input
        className="input w-full max-w-xs"
        type="text"
        placeholder="Enter user"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button className="btn bg-blue-600 ml-5" type="submit">
        Add User
      </button>
    </form>
  );
};

const mapDispatchToProps = {
  addTask,
};

export default connect(null, mapDispatchToProps)(TaskForm);
