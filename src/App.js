import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import Form from "./Component/Form";
import CreateTask from "./Component/CreateTask";

import "./App.css";

function App() {
  const initialInputs = {
    task: "",
    deadline: "",
    priority: "low",
  };
  const [inputs, setInputs] = useState(initialInputs);
  const [tasks, setTasks] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const newTask = { ...inputs };

    setTasks([...tasks, newTask]);

    console.log(inputs);
    console.log(tasks);
    setInputs(initialInputs);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));

    console.log(tasks);
  }

  return (
    <>
      <h1>ToDo App</h1>
      <Form onSubmit={handleSubmit} input={inputs} onChangeFun={handleChange} />

      <div className="todoContainer">
        {tasks.map((taskDeatil, index) => {
          return <CreateTask taskInfo={taskDeatil} key={index}></CreateTask>;
        })}
      </div>
    </>
  );
}

export default App;
