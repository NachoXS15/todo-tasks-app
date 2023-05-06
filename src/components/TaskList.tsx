import React from "react";
import ITask from "../interfaces/iTask";
import TaskCard from "./TaskCard";

interface Props {
  tasks: ITask[];
}

export default function TaskList({ tasks }: Props) {
  return (
    <>
      {
        tasks.map((task) => (
          <div className="col-md-4">
            <TaskCard tasks={task} />
          </div>
          
        ))
      }
    </>
  );
}
 