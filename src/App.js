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
  };
  const [inputs, setInputs] = useState(initialInputs);
  const [tasks, setTasks] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

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

  function handleCheckbox() {
    setIsComplete(!isComplete);
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
              onChangeFun={handleCheckbox}
              completeCheck={isComplete}></CreateTask>
          );
        })}
      </div>
    </>
  );
}

export default App;
