import React, { useState } from "react";
//type definition
import ITask from "../interfaces/iTask";
type FormElement = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

// const [tasks, setTasks] = useState({
//   title: "",
//   description: "",
// });

const handleInputChange = ({target}: FormElement) => {
  console.log(target.name)
}

const handleSubmit = (e: FormElement) => {
  e.preventDefault();
};

export default function AddForm() {
  return (
    <div className="containter p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form /*onSubmit={handleSubmit}*/>
                <input
                  type="text"
                  onChange={handleInputChange}
                  placeholder="Introduzca titulo de tarea"
                  className={
                    /* inputError ? 'inputError' : */ "form-control shadow-none"
                  }
                  autoFocus
                  name="title"
                />
                <textarea
                  cols={20}
                  rows={5}
                  style={{ resize: "none" }}
                  placeholder="Introduzca descripcion de tarea"
                  className="form-control mb-3 shadow-none"
                  name="description"
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
