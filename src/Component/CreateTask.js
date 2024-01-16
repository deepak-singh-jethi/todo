import React from "react";

const CreateTask = function ({ taskInfo, uniqueKey }) {
  const { task, deadline, priority } = taskInfo;
  console.log(priority);

  return (
    <div
      id={uniqueKey}
      className={`taskContainer ${
        priority === "High" ? "high" : priority === "Medium" ? "medium" : "low"
      }`}>
      <div>
        <p>Complete :</p>
        <input type="checkbox" id="completeCheck" />
      </div>
      <p>{task}</p>
      <p>{deadline}</p>
      <p>{priority}</p>
    </div>
  );
};

export default CreateTask;
