import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from "./actions";

const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.taskId) {
            return { ...task, ...action.payload.updatedTask };
          }
          return task;
        }),
      };
    default:
      return state;
  }
};

export default tasksReducer;
