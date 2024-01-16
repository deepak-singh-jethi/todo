import React from "react";
import { useState } from "react";
import Form from "./Component/Form";
import CreateTask from "./Component/CreateTask";

import "./App.css";

function App() {
  let count = 1;
  const initialInputs = {
    task: "",
    deadline: "",
    priority: "Low",
    isComplete: false,
  };
  const [inputs, setInputs] = useState(initialInputs);
  const [tasks, setTasks] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const newTask = { ...inputs };
    setTasks([...tasks, newTask]);
    setInputs(initialInputs);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function handleCheckbox(index) {
    const updateTask = [...tasks];
    updateTask[index] = {
      ...updateTask[index],
      isComplete: !updateTask[index].isComplete,
    };
    setTasks(updateTask);
  }

  return (
    <>
      <h1>ToDo App</h1>
      <Form onSubmit={handleSubmit} input={inputs} onChangeFun={handleChange} />

      <div className="todoContainer">
        {tasks.map((taskDeatil, index) => {
          return (
            <CreateTask
              taskInfo={taskDeatil}
              key={count++}
              onChangeFun={() => {
                handleCheckbox(index);
              }}
              completeCheck={taskDeatil.isComplete}></CreateTask>
          );
        })}
      </div>
    </>
  );
}

export default App;
