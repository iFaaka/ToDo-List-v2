import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './stylesheets/Formulario.css'

export const Formulario = ({ onSubmit }) => {
 
  const [input, setInput] = useState('')

  const handleChange = (e) => setInput(e.target.value)
 
  const handleSubmit = (e) => {
    e.preventDefault()

    const nuevaTarea = {
      texto: input,
      id: uuidv4(),
      completada: false,
    }

    onSubmit(prevS => [nuevaTarea,...prevS])

  }
 
 
  return (
    <form 
    className='formulario-container'
    onSubmit={handleSubmit}>
        <input 
          type='text'
          className='formulario-input'
          name='text'
          onChange={handleChange}
          />
        <button 
          className='formulario-button'
          type='submit'
        >
          Enviar
        </button>

    </form>
  )
}
