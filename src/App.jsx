import React, {useState} from 'react';
import TaskList from "./Components/TaskList.jsx";
import TaskForm from "./Components/TaskForm.jsx";
import './index.css';

function App() {

    // Usamos useState para crear una variable de estado 'listaDeTareas' que contiene un array de tareas

    const [listaDeTareas, setListaDeTareas] = useState([
        { id: 1, texto: 'Ir al supermercado' },
        { id: 2, texto: 'Estudiar para el examen' },
        { id: 3, texto: 'Ir al gimnasio' },
    ]);

    const marcarCompleta = (taskId) => {
        console.log(`Marcar como completa: ${taskId}`); //Solamente imprime mensaje en la consola
    };

    const eliminarTarea = (taskId) => {
        // Filtra la lista de tareas para excluir la tarea con ese id
        const nuevaListaDeTareas = listaDeTareas.filter(tarea => tarea.id !== taskId);

        // Actualizamos con la nueva lista de tareas
        setListaDeTareas(nuevaListaDeTareas);
    };


    //La función toma una nueva tarea como argumento, crea un objeto de tarea y luego actualiza el estado
    //listaDeTareas y asi agrega una nueva tarea a la lista
    const agregarTarea = (nuevaTarea) => {
        const nuevaTareaObj = { id: listaDeTareas.length + 1, texto: nuevaTarea };
        setListaDeTareas([...listaDeTareas, nuevaTareaObj]);
    };

    //Renderizamos la interfaz de usuario, con el formulario y la lista de tareas
    return (
        <div className='container'>
            <h1 className='titulo'>Mi lista de tareas</h1>
            <div className='adentro'>
                <TaskForm onAgregarTarea={agregarTarea} />
                <TaskList
                    tareas={listaDeTareas}
                    onMarcarCompleta={marcarCompleta}
                    onEliminar={eliminarTarea}
                />
            </div>
        </div>
    );
}
export default App;

