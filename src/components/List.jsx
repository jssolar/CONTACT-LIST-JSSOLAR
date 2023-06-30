import React from "react";
import { useState } from "react";
import { RiDeleteBin2Fill } from 'react-icons/ri'


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
              
          <div className="nueva-tarea card">
            <form  onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={agregarTarea}
                onChange={handleChange} w-100/>
                <button className="boton btn btn-primary" onClick={handleclick} type="submit">Ingresar tarea</button> 
            <h4>No hay tareas</h4>
       
            {<ul className="list-group list-group-flush">
                {
                  newTask.map((item, index) =>  (<li className="list-group-item listas" key={index}>{item} <RiDeleteBin2Fill  /></li>))
                }

            </ul>
            }
            </form>
          </div>
        </div>
      
  );
};

export default List;
