import React from "react";
import { useState } from "react";
import { Formulario } from "./Formulario";
import { ListaDeTareas } from "./ListaDeTareas";
import "./stylesheets/ToDoList.css";

export const ToDoList = () => {
  const [tareas, setTareas] = useState([]);

  const handleDelete = (id) => {
    const newArr = tareas.filter((tarea) => tarea.id !== id);
    setTareas(newArr);
  };

  const handleComplete = (id) => {
    const newArr = tareas.map((tarea) => {
      if (tarea.id === id && tarea.completada === false) {
        return {
          texto: tarea.texto,
          completada: true,
          id: tarea.id,
        };
      } else if (tarea.id === id && tarea.completada === true) {
        return {
          texto: tarea.texto,
          completada: false,
          id: tarea.id,
        };
      } else {
        return tarea;
      }
    });

    setTareas(newArr);
  };

  return (
    <div className="listadetareas-container">
      <h1>Lista de tareas</h1>

      <Formulario onSubmit={setTareas} />
      <ListaDeTareas
        handleDelete={handleDelete}
        tareas={tareas}
        handleComplete={handleComplete}
      />
    </div>
  );
};
