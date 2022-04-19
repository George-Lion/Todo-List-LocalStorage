import React from "react";

const TodoList = () => {
  return (
    <div>
      <h1>Soy TodoList</h1>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title text-end">Titulo de la tarea </h3>
          <button className="btn btn-sm btn-success">Terminar</button>
          <p className="card-text text-end">Descripcion de la tarea</p>
          <hr />
          <div className="d-flex justify-content-end">
            <button className="btn btn-sm btn-primary me-1">Editar</button>
            <button className="btn btn-sm btn-danger">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
