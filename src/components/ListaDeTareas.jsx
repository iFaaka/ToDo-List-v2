import React from 'react'
import { Tarea } from './Tarea'

export const ListaDeTareas = ( { tareas, handleDelete,handleComplete } ) => {



  return (
    <div>
      {
        tareas.map(tarea => 
          <Tarea
          key={tarea.id}
          texto={tarea.texto}
          id={tarea.id}
          completada={tarea.completada}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
          />)
      }
    </div>
  )
}
