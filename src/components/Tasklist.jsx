// TaskList.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteTask, updateTask } from "../redux/actions";

const TaskList = ({ tasks, deleteTask, updateTask }) => {
  const [editedTaskName, setEditedTaskName] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleDelete = (taskId) => {
    deleteTask(taskId);
  };

  const handleUpdate = (taskId, updatedTask) => {
    updateTask(taskId, updatedTask);
    setEditingTaskId(null);
  };

  const handleEdit = (taskId, taskName) => {
    setEditingTaskId(taskId);
    setEditedTaskName(taskName);
  };

  const handleInputChange = (e) => {
    setEditedTaskName(e.target.value);
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
    setEditedTaskName("");
  };

  return (
    <div className="w-[60vw]">
      <h2 className="text-4xl p-6 font-semibold text-yellow-800">Users</h2>
      <ul className="text-2xl p-6 border-solid border-2 border-indigo-600 rounded-lg divide-y">
        {tasks.map((task, index) => (
          <li key={task.id} className="flex gap-4">
            {editingTaskId === task.id ? (
              <>
                <input
                  className="input"
                  type="text"
                  value={editedTaskName}
                  onChange={handleInputChange}
                />
                <button
                  className="btn"
                  onClick={() =>
                    handleUpdate(task.id, { name: editedTaskName })
                  }
                >
                  Save
                </button>
                <button className="btn" onClick={handleCancelEdit}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                {index + 1}
                <div className="flex justify-between w-full">
                  {task.name}
                  <div className="flex gap-4">
                    <button
                      className="btn"
                      onClick={() => handleDelete(task.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn"
                      onClick={() => handleEdit(task.id, task.name)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = {
  deleteTask,
  updateTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
