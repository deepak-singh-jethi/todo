import React from "react";

const CreateTask = function ({
  taskInfo,
  uniqueKey,
  onChangeFun,
  completeCheck,
}) {
  const { task, deadline, priority } = taskInfo;
  return (
    <div
      id={uniqueKey}
      className={`taskContainer ${
        completeCheck
          ? "complete"
          : priority === "High"
          ? "high"
          : priority === "Medium"
          ? "medium"
          : "low"
      }`}>
      <div>
        <p>Complete :</p>
        <input type="checkbox" id="completeCheck" onChange={onChangeFun} />
      </div>
      <p>{task}</p>
      <p>{deadline}</p>
      <p>{priority}</p>
    </div>
  );
};

export default CreateTask;
