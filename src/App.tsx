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

  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: 1,
      name: "matar a marco",
      description: "con una vandal prime",
      done: false
    }
  ]);
  const [newTask, setNewTask] = useState<string>("");
  const [inputError, setInputError] = useState(false);
  const [inputValue, setInputValue] = useState("");

 
  //functions
  const addTasks = (name: string): void => {
    const setNewTasks: ITask[] = [...tasks];
    setTasks(setNewTasks);
  };

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
        <AddForm />
        <div className="row">
          <div className="col-md-8">
            <TaskList tasks={tasks}/>
          </div>
        </div>
      </div>
      
      
      
      
    </>
  );
}


export default App;

