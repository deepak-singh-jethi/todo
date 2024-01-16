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

  // hooks
  const [inputs, setInputs] = useState(initialInputs);
  const [tasks, setTasks] = useState([]);

  // form submit handling
  function handleSubmit(event) {
    event.preventDefault();
    const newTask = { ...inputs };
    setTasks([...tasks, newTask]);
    setInputs(initialInputs);
  }

  // input change handling
  function handleChange(event) {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  // checkBox handling
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
      {/* form */}
      <Form onSubmit={handleSubmit} input={inputs} onChangeFun={handleChange} />
      {/* task conatiner */}
      <br />
      <div className="todoContainer">
        <div className="taskContainer" id="taskHeading">
          <p>Complete</p>
          <p>Task</p>
          <p>Deadline</p>
          <p>Priority</p>
        </div>
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
