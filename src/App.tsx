import React, { FormEvent, useState } from "react";
//import logos, styles and svgs
import logo from "./assets/img/xs-logo-white.png";
import igIcon from "./assets/svg/brand-instagram.svg";
import ldIcon from "./assets/svg/brand-linkedin.svg";
import ghIcon from "./assets/svg/brand-github.svg";
import "./App.scss";

//import components and interfaces
import AddForm from "./components/AddForm";
import ITask from "./interfaces/iTask";
import TaskList from "./components/TaskList";

//type declaration;
type FormElement = React.FormEvent<HTMLFormElement>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;


function App(): JSX.Element{

  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [inputError, setInputError] = useState(false);
  const [inputValue, setInputValue] = useState("");

 
  //functions
  // const addTasks = (name: string): void => {
  //   const setNewTasks: ITask[] = [...tasks, { name, done: false }];
  //   setTasks(setNewTasks);
  // };

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

  // const handleSubmit = (e: FormElement) => {
  //   if (newTask === "") {
  //     e.preventDefault();
  //     setInputError(true);
  //     console.log(inputError)
  //   }else{
  //     e.preventDefault();
  //     addTasks(newTask);
  //     console.log(tasks);
  //     setNewTask("");
  //   }
  // };
  
  return (
    <>
      <header className="nav nav-bar bg-primary flex justify-content-around align-items-center">
        <a href="/" className="navbar-brand" style={{fontSize: "20px", color:"white"}}>
            <img src={logo} style={{width: "4rem"}} className=""/>
            Task-List-App
        </a>
        <nav className="">
          <a className="text-secondary" href="https://www.instagram.com/nachoxs_/"><img className="p-2" src={igIcon}/></a>
          <a className="text-secondary" href="https://www.linkedin.com/in/ignacio-joaqu%C3%ADn-pantoja-280a3322a/"><img className="p-2" src={ldIcon}/></a>
          <a className="text-secondary" href="https://github.com/NachoXS15"><img className="p-2" src={ghIcon}/></a>
        </nav>
      </header>
      <div className="">

      </div>
      <AddForm />
      <TaskList tasks={tasks}/>
    </>
    
  );
}


export default App;

