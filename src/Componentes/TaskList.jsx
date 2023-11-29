import React from "react";
import TaskItem from "./TaskItem.jsx";

function TaskList({ tareas, onMarcarCompleta, onEliminar }) { //Recibe como propiedades lista de tareas y funciones de gestion de eventos
    return (
        <div className='lista-tareas'>
            {tareas.map((tarea) => ( //Usamos método map para iterar sobre array de tareas
                <TaskItem               //Por cada una, se renderiza un componente TaskItem
                    key={tarea.id}
                    tarea={tarea}
                    marcarCompleta={onMarcarCompleta}
                    eliminar={onEliminar}
                />
            ))}
        </div>
    )
}

export default TaskList;