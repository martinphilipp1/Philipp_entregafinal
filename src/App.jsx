import React, { useState } from "react";
import TaskList from "./Componentes/TaskList";

function App() {
  const [tareas, setTareas] = useState([]);
  const [inputVal, setInputVal] = useState("");

  function writeTarea(e) {
    setInputVal(e.target.value);
  }

  function addTarea() {
    if (inputVal !== "") {
      setTareas((prevTareas) => [...prevTareas, inputVal]);
      setInputVal("");
    }
  }

  function delTarea(tareaIndex) {
    setTareas((prevTareas) =>
      prevTareas.filter((prevTarea, prevTareaIndex) => {
        return prevTareaIndex !== tareaIndex;
      })
    );
  }

  return (
    <>
      <h1>Lista de tareas</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Escribir tarea"
          value={inputVal}
          onChange={writeTarea}
        />
        <button onClick={addTarea}>+</button>
      </div>
      <TaskList tareas={tareas} delTarea={delTarea} />
    </>
  );
}

export default App;