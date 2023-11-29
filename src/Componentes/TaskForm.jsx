import React, {useState} from "react";

function TaskForm({onAgregarTarea}) {   //Recibe esta funcion como argumento que nos sirve para agregar nuevas tareas a la lista

    const [nuevaTarea, setNuevaTarea] = useState('');   //Inicializamos con cadena vacía

    const handleInputChange = (event) => {  //Se la llama cuando hay un cambio en el input de texto y
        setNuevaTarea(event.target.value);        // actualiza el estado nuevaTarea con el valor del input
    };

    const handleSubmit = (event) => {       //Función que se llama al enviar el formulario
        event.preventDefault();         //Así evitamos que se recargue la página al enviarlo

        if (nuevaTarea.trim() === '') {     // Para evitar agregar tareas vacías
            return;
        }

        onAgregarTarea(nuevaTarea);
        setNuevaTarea('');      //Después de agregar la tarea se restablece el estado nuevaTarea a una cadena vacía
    }

    //Renderizamos el formulario. El valor del input está vinculado a nuevaTarea y se llama a handleInputChange
    // cada vez que el valor del input cambia. Cuando se envía el formulario se llama a handleSubmit.
    return (
        <form className='formulario' onSubmit={handleSubmit}>
            <label className='nuevaTarea'>
                Añade una nueva tarea:
                <input type="text" value={nuevaTarea} onChange={handleInputChange} />
            </label>
            <button type="submit" className='boton'>Agregar Tarea</button>
        </form>
    )
}

export default TaskForm;