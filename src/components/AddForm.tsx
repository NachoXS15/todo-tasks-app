import React from 'react'

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
                      onChange={(e) => {
                        // setNewTask(e.target.value);
                        // handlerInputError;
                      }}
                      placeholder='Introduzca titulo de tarea'
                      className={/* inputError ? 'inputError' : */ 'form-control'}
                      autoFocus
                    />
                    <textarea cols={30} rows={10} style={{resize: "none"}} placeholder='Introduzca descripcion de tarea' className='form-control'>
                    
                    </textarea>
                    <button style={{width: "100%"}} className="btn btn-success btn-block mt-2">Save</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}
