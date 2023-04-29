import React, { FormEvent, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
//type declaration;
type FormElement = React.FormEvent<HTMLFormElement>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
interface ITask {
  name: string;
  done: boolean;
}

function App(): JSX.Element{

  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [inputError, setInputError] = useState(false);
  const [inputValue, setInputValue] = useState("");

 
  //functions
  const addTasks = (name: string): void => {
    const setNewTasks: ITask[] = [...tasks, { name, done: false }];
    setTasks(setNewTasks);
  };

  const toogleDoneTask = (i: number): void  => {
    const newTasks: ITask[] = [...tasks];
    newTasks[i].done = !newTasks[i].done
    setTasks(newTasks)
  }

  const removeTasks = (i: number): void => {
    const newTasks: ITask[] = [...tasks];
    newTasks.splice(i, 1);
    setTasks(newTasks);
  }
  // handlers
  const handlerInputError = (e: ChangeEvent) => {
    setInputValue(e.target.value)
    setInputError(false)
  }

  const handleSubmit = (e: FormElement) => {
    if (newTask === "") {
      e.preventDefault();
      setInputError(true);
      console.log(inputError)
    }else{
      e.preventDefault();
      addTasks(newTask);
      console.log(tasks);
      setNewTask("");
    }
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
                    handlerInputError;
                  }}
                  value={newTask}
                  className={inputError ? 'inputError' : 'form-control'}
                  autoFocus
                  
                />
                <button style={{width: "100%"}} className="btn btn-success btn-block mt-2">Save</button>
              </form>
            </div>
            {tasks.map((t: ITask, i: number) => {
              return <div key={i} style={{display: "flex", justifyContent: "space-around", gap: "70px"}} className="card-body mt-2">
                <h3 style={{textDecoration: t.done ? 'line-through ': ''}}>{t.name}</h3>
                <div>
                  <button className="btn btn-secondary" onClick={() => toogleDoneTask(i)}>Done</button>
                  <button className="btn btn-secondary" onClick={() => removeTasks(i)}>Delete</button>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
