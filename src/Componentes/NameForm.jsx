import React, { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import "../index.css";

const NameForm = ({ onNameSubmit, onNameDelete }) => {
  const { getItem, setItem, removeItem } = useLocalStorage('nombre');
  const [nombre, setNombre] = useState('');
  const [showPage, setShowPage] = useState(true);

  useEffect(() => {
    const nombreGuardado = getItem();
    if (nombreGuardado) {
      setNombre(nombreGuardado);
      setShowPage(false);
    }
  }, []);

  const handleNameChange = (event) => {
    setNombre(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nombre.trim() !== '') {
      onNameSubmit(nombre);
    } else {
      alert('Por favor ingrese su nombre');
    }
  };

  const handleSaveName = () => {
    setItem(nombre);
    setShowPage(false);
  };

  const handleDeleteName = () => {
    removeItem(); 
    setNombre(''); 
    setShowPage(true); 
  };

  return (
    <div className='inicio'>
      <form onSubmit={handleSubmit}>
        <label className='etiquetaNombre'>
          Ingresa tu nombre:
          <input type="text" value={nombre} onChange={handleNameChange} />
        </label>
        <button onClick={handleSaveName} className='botonInicio' type="submit">Completar</button>
      </form>
    </div>
  );
};

export default NameForm;