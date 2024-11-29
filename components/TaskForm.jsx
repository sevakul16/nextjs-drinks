import React from "react";
import { createTask } from "@/utils/actions";

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="Add a task"
          name="content"
          required
        ></input>
        <button className="btn btn-primary join-item" type="submit">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
