import React from "react";
import { useState } from "react";

const List = () => {
  const [agregarTarea, setAgregarTarea] = useState("");
  const [newTask, setNewTask] = useState([]);


  const handleSubmit = (e) =>{
  e.preventDefault()
  }
  const handleChange = (event) => {
        setAgregarTarea(event.target.value)
  };

  const handleclick = () => {
    if (agregarTarea !== '') 
    setNewTask(newTask.concat(agregarTarea)) 
    setAgregarTarea('')
  }

  return (
    <div className="container border m-5">
      
        <h1>Lista de tareas</h1>
              
        <div className="nueva-tarea">
            <form  onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={agregarTarea}
                onChange={handleChange} />
                <button className="boton btn btn-primary" onClick={handleclick} type="submit">Ingresar tarea</button> 
            </form>
        <h4>No hay tareas</h4>
        <div className="agregar-tarea-lista">
            {<ul className="list-group list-group-flush">
                {
                    newTask.map((item, index) =>  (<li  className="list-group-item" key={index}>{item}</li>))
                }

            </ul>
            }
        </div>
        </div>
    </div>
  );
};

export default List;
