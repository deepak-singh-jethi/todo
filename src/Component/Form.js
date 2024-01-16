import React from "react";

const Form = function ({ onSubmit, input, onChangeFun }) {
  const { task, deadline, priority } = input;

  return (
    <form onSubmit={onSubmit}>
      <div>
        <div>
          <p>Task:</p>
          <input
            type="text"
            placeholder="Task Name"
            id="task"
            name="task"
            value={task}
            onChange={onChangeFun}
            required
          />
        </div>
        <div>
          <p>Deadline:</p>
          <input
            type="date"
            placeholder="Deadline"
            name="deadline"
            value={deadline}
            onChange={onChangeFun}
            required
          />
        </div>
        <div>
          <p>Priority:</p>
          <select name="priority" value={priority} onChange={onChangeFun}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </div>

      <button> Add</button>
    </form>
  );
};

export default Form;
