import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import TaskList from "./components/Tasklist";
import TaskForm from "./components/TaskForm";

const App = () => {
  return (
    <Provider store={store}>
      <div className="flex flex-col justify-center items-center">
        <TaskForm />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
