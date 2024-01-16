import React from "react";

const CreateTask = function ({ taskInfo, key }) {
  const { task, deadline, priority, status } = taskInfo;
  return (
    <div id={key} className="taskContainer">
      <h3>{task}</h3>
      <h3>{deadline}</h3>
      <h3>{priority}</h3>
    </div>
  );
};

export default CreateTask;
