import { deleteTask } from "@/utils/actions";
import React from "react";

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <button className="btn btn-error btn-xs" type="submit">
        delete
      </button>
    </form>
  );
};

export default DeleteForm;
