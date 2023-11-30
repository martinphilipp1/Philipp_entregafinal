import React, {useState} from "react";

function TaskItem({tarea, marcarCompleta, eliminar}) { //Recibe estas propiedades desde el componente TaskList

    const [completa, setCompleta] = useState(false); //Inicializamos 'completa' con el valor false

    const handleMarcarCompleta = () => {   //Función que es llamada al hacer click en botón para marcar o desmarcar como completa
        setCompleta(!completa);      //Usamos setCompleta para cambiar el valor de completa a su opuesto
        marcarCompleta(tarea.id);    //Llamamos a marcarCompleta pasando el id de la tarea
        if (completa) {
            alert("Habrá que volver a intentarlo...");
          } else {
            alert("¡Una menos!");
          }
        };

    const handleEliminar = () => {      //Se llama a esta función al clickear boton 'eliminar'
        eliminar(tarea.id);     //Llamamos a eliminar pasando el id de la tarea
        alert("Tarea '" + tarea.texto + "' eliminada")
    };


    //Mostramos la tarea con un estilo tachado si está marcada como completa. Hay dos botones, uno para marcar como completa
    // y otro para eliminar la tarea. El primero cambia según el estado de la tarea utilizando las funciones antes mencionadas
    return (
        <div className="task-item">
            <span className='tarea' style={{ textDecoration: completa ? 'line-through' : 'none' }}>{tarea.texto}</span>
            <div className="container-botones">
                <button className='boton-completada' onClick={handleMarcarCompleta}>
                    {completa ? 'Desmarcar como completa' : 'Marcar como completa'}
                </button>
                <button className='boton-eliminar' onClick={handleEliminar}>Eliminar</button>
            </div>
        </div>
    );
}

export default TaskItem;