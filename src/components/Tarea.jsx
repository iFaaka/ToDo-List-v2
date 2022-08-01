import React from "react";
import "./stylesheets/Tarea.css";
import { RiDeleteBin7Line } from "react-icons/ri";

export const Tarea = ({
  texto,
  id,
  handleDelete,
  completada,
  handleComplete,
}) => {
  return (
    <div className="tarea-container">
      <p
        className={`${completada === true ? "tachado" : ""}`}
        onClick={() => handleComplete(id)}
      >
        {texto}
      </p>

      <p onClick={() => handleDelete(id)}>
        <RiDeleteBin7Line />
      </p>
    </div>
  );
};
