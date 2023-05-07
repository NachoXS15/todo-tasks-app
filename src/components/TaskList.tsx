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
        tasks.map((task, i: number) => (
          <div className="col-md-4" key={i}>
            <TaskCard tasks={task} />
          </div>
          
        ))
      }
    </>
  );
}
 