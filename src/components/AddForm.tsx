import React, { useState, ChangeEvent, FormEvent } from "react";
//type definition
interface Props {
  addTask: (task: ITask) => void;
}
import ITask from "../interfaces/iTask";
type dataElement = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type formElement = FormEvent<HTMLFormElement>

export default function AddForm({addTask}: Props) {
  const [task, setTask] = useState({
    name: "",
    description: "",
  });
  
  const handleInputChange = ({ target: {name, value} }: dataElement) => {
    setTask({...task, [name]: value})
  };

  const handleNewTask = (e: formElement):void => {
    e.preventDefault();
    addTask(task)
    setTask({
      name: "",
      description: ""
    })
  };
  
  return (
    <div className="containter p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleNewTask}>
                <input
                  type="text"
                  onChange={handleInputChange}
                  placeholder="Introduzca titulo de tarea"
                  className={
                    /* inputError ? 'inputError' : */ "form-control shadow-none"
                  }
                  autoFocus
                  name="name"
                  value={task.name}
                />
                <textarea
                  cols={20}
                  rows={5}
                  style={{ resize: "none" }}
                  placeholder="Introduzca descripcion de tarea"
                  className="form-control mb-3 shadow-none"
                  name="description"
                  onChange={handleInputChange}
                  value={task.description}
                ></textarea>
                <button
                  style={{ width: "100%" }}
                  className="btn btn-success btn-block mt-2"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
