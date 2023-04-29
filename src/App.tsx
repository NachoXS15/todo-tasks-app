import React, { FormEvent, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
//type declaration;
type FormElement = React.FormEvent<HTMLFormElement>;
interface ITask {
  name: string;
  done: boolean;
}




function App(): JSX.Element{

  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTasks(newTask);
    console.log(tasks);
    setNewTask("");
  };

  const addTasks = (name: string) => {
    const setNewTasks: ITask[] = [...tasks, { name, done: false }];
    setTasks(setNewTasks);
  };

  return (
    <div className="containter p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  onChange={(e) => {
                    setNewTask(e.target.value);
                  }}
                  value={newTask}
                  className="form-control"
                  autoFocus
                />
                <button className="btn btn-success btn-block mt-2">Save</button>
              </form>
            </div>
            {tasks.map((t: ITask, i: number) => {
              return <div key={i} className="card card-body mt-2">
                <h3>{t.name}</h3>;
                <p>{t.done + ''}</p>
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
