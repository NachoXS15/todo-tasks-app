import React from "react";
import ITask from "../interfaces/iTask";
import TaskCard from "./TaskCard";

interface Props {
  tasks: ITask[];
  removeTasks: (id: number) => void;
}

export default function TaskList({ tasks, removeTasks }: Props) {
  return (
    <>
      {
        tasks.map((task, i: number) => (
          <div className="col-md-4" key={task.id}>
            <TaskCard tasks={task} removeTasks={removeTasks}/>
          </div>
        ))
      }
    </>
  );
}
 