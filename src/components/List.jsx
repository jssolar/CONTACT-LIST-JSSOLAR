import React, { useEffect } from "react";
import { useState } from "react";
import { RiDeleteBin2Fill } from 'react-icons/ri'


const List = () => {
  const [agregarTarea, setAgregarTarea] = useState(null);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetch('https://playground.4geeks.com/apis/fake/todos/user/jssolar', {
      method: "GET",
      // body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        // console.log(data);
        setNewTask(data)
      })
      .catch(error => {
        //manejo de errores
        console.log(error);
      });
  }, [])



  const handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      agregarTarea
    }
  }
  const handleChange = (event) => {
    setAgregarTarea({ })
    console.log(agregarTarea)
  };

  const handleclick = () => {
    let newListTasks = [...newTask, agregarTarea]
    setNewTask(newListTasks)
    if (agregarTarea.label !== '' && newListTasks !=='') {
      // setNewTask(newTask.concat(agregarTarea)) 
      fetch('https://assets.breatheco.de/apis/fake/todos/user/jssolar', {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newListTasks)
      })
        .then(resp => {
          return resp.json();
        })
        .then(data => {
          //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
          console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
        })
        .catch(error => {
          //manejo de errores
          console.log(error);
        });
    }
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={agregarTarea.label}
            onChange={handleChange} />
          <button className="boton btn btn-primary"
            onClick={handleclick}
            type="submit">Ingresar tarea</button>


          {<ul className="list-group list-group-flush">
            {
              newTask.length > 0 ?
                newTask.map((item, index) => (<li className="list-group-item listas" key={index}>{item.label} <RiDeleteBin2Fill onClick={(index) => deleteTarea()} /></li>)) : <h4>No hay tareas</h4>
            }

          </ul>
          }
        </form>
      </div>
    </div>

  );
};

export default List;
