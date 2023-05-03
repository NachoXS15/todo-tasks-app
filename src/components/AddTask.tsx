import React from 'react'

export default function AddTask() {
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
                  value={""}
                  className={/* inputError ? 'inputError' : */ 'form-control'}
                  autoFocus
                />
                <button style={{width: "100%"}} className="btn btn-success btn-block mt-2">Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
