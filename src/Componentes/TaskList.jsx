import React from "react";

function TaskList({ tareas, delTarea }) {
  return (
    <div className="container">
      {tareas.map((tarea, index) => {
        return (
          <div className="tarea" key={index}>
            <p>{tarea}</p>
            <div className="actions">
              <input type="checkbox" />
              <button onClick={() => delTarea(index)}>Borrar</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TaskList;