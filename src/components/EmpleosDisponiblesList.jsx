import React from "react";
import EmpleosDisponiblesItem from "./EmpleosDisponiblesItem";

import { useSelector } from "react-redux";

function EmpleosDisponiblesList() {
  const empleosDisponibles = useSelector(
    state => state.empleoReducer.empleosDisponibles
  );

  return (
    <>
      {empleosDisponibles.map(empleo => (
        <EmpleosDisponiblesItem key={empleo.id} item={empleo} />
      ))}
    </>
  );
}

export default EmpleosDisponiblesList;
