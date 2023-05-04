import React from "react";
import ITask from "../interfaces/iTask";

interface Props {
  tasks: ITask[];
}

export default function TaskList({ tasks }: Props) {
  return (
    <>
      {tasks.map((t: ITask, i: number) => {
        return (
          <div className="container p-4">
            <h1>{t.name}</h1>
            <p>{t.description}</p>
          </div> 
        );
      })}
    </>
  );
}
