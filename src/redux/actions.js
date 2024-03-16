export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const updateTask = (taskId, updatedTask) => ({
  type: UPDATE_TASK,
  payload: { taskId, updatedTask },
});
