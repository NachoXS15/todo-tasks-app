import React, { FormEvent, useState } from "react";
import "./App.scss";

//import components and interfaces
import AddForm from "./components/AddForm";
import ITask from "./interfaces/iTask";
import TaskList from "./components/TaskList";
import Header from "./components/Header";


//type declaration;
type FormElement = React.FormEvent<HTMLFormElement>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;


function App(): JSX.Element{

  const [tasks, setTasks] = useState<ITask[]>([]);
  const [inputError, setInputError] = useState(false);
  const [inputValue, setInputValue] = useState("");

  //functions
  const getTimestamp = () => new Date().getTime();

  const addTasks = (task: ITask) => setTasks([...tasks, {...task, id: getTimestamp(), done: false}]);;
  
  const removeTasks = (id: number) => setTasks(tasks.splice(id, 1));

  // const toogleDoneTask = (i: number): void  => {
  //   const newTasks: ITask[] = [...tasks];
  //   newTasks[i].done = !newTasks[i].done
  //   setTasks(newTasks)
  // }

  // const removeTasks = (i: number): void => {
  //   const newTasks: ITask[] = [...tasks];
  //   newTasks.splice(i, 1);
  //   setTasks(newTasks);
  // }

  

  // // handlers
  // const handlerInputError = (e: ChangeEvent) => {
  //   setInputValue(e.target.value)
  //   setInputError(false)
  // }

  return (
    <>
      <Header />
      <div className="container p-4">
        <AddForm addTask={addTasks}/>
        <div className="row">
          <div className="col-md-8">
            <TaskList tasks={tasks} removeTasks={removeTasks}/>
          </div>
        </div>
      </div>
    </>
  );
}


export default App;

