import { createStore } from "redux";
import tasksReducer from "./reducers";

const store = createStore(tasksReducer);

export default store;
