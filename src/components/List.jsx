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
const deleteTarea = (index) => {
    const borrarTarea = [...newTask]
    borrarTarea.splice(index, 1)
    setNewTask(borrarTarea)
}
  

  return (
    <div className="card border m-5">
        <h3>Lista de tareas</h3>
          <div className="nueva-tarea card">
            <form  onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={agregarTarea}
                onChange={handleChange}/>
                <button className="boton btn btn-primary" onClick={handleclick} type="submit">Ingresar tarea</button> 
            
       
            {<ul className="list-group list-group-flush">
                {
                  newTask.length>0?
                  newTask.map((item, index) =>  (<li className="list-group-item listas" key={index}>{item} <RiDeleteBin2Fill onClick = {(index) => deleteTarea()} /></li>)): <h4>No hay tareas</h4>
                }

            </ul>
            }
            </form>
          </div>
        </div>
      
  );
};

export default List;
