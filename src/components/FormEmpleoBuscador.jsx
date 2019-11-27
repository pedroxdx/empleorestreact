import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { useSelector, useDispatch } from "react-redux";
import {
  getFormEmpleoBuscador,
  setFormEmpleosBuscador,
  getEmpleosDisponibles
} from "../store/actions";

import "../styles/EmpleoBuscador.css";

function FormEmpleoBuscador({ history, redirect = false }) {
  const dispatch = useDispatch();
  const appAPI = useSelector(state => state.appReducer.api);
  const formEmpleoBuscador = useSelector(
    state => state.empleoReducer.formEmpleoBuscador
  );
  const formDataEmpleoBuscador = useSelector(
    state => state.empleoReducer.formDataEmpleoBuscador
  );

  const [form, setValues] = useState(formEmpleoBuscador);

  useEffect(() => {
    if (!formDataEmpleoBuscador.area.length) {
      dispatch(getFormEmpleoBuscador(appAPI));
    }
  }, [appAPI, dispatch]);

  const handleChangeSelectElement = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.checked
    });
  };

  const handleChangeEmpleoBuscador = e => {
    setValues({
      ...form,
      [e.target.name]: Number(e.target.value)
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setFormEmpleosBuscador(form));
    dispatch(getEmpleosDisponibles(appAPI, form)).then(() => {
      if (redirect) history.push("/empleos");
    });
  };

  return (
    <>
      <article className="busqueda">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="busquedaempleo-area" className="control-label">
              Vacante
            </label>
            <div className="form-inline">
              <div className="custom-control custom-checkbox my-1">
                <input
                  type="checkbox"
                  id="selectedArea"
                  name="selected_area"
                  className="custom-control-input"
                  checked={form.selected_area}
                  onChange={handleChangeSelectElement}
                />
                <label
                  htmlFor="selectedArea"
                  className="custom-control-label"
                ></label>
              </div>
              <select
                className="custom-select my-1"
                name="area"
                value={form.area}
                onChange={handleChangeEmpleoBuscador}
              >
                {formDataEmpleoBuscador.area.map(area => (
                  <option key={area.id} value={area.id}>
                    {area.nombre}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label
              htmlFor="busquedaempleo-disponibilidad"
              className="control-label"
            >
              Disponibilidad
            </label>
            <div className="form-inline">
              <div className="custom-control custom-checkbox my-1">
                <input
                  type="checkbox"
                  id="selectedDisponibilidad"
                  name="selected_disponibilidad"
                  className="custom-control-input"
                  checked={form.selected_disponibilidad}
                  onChange={handleChangeSelectElement}
                />
                <label
                  htmlFor="selectedDisponibilidad"
                  className="custom-control-label"
                ></label>
              </div>
              <select
                className="custom-select my-1"
                name="disponibilidad"
                value={form.disponibilidad}
                onChange={handleChangeEmpleoBuscador}
              >
                {formDataEmpleoBuscador.disponibilidad.map(disponibilidad => (
                  <option key={disponibilidad.id} value={disponibilidad.id}>
                    {disponibilidad.nombre}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="busquedaempleo-salario" className="control-label">
              Salario
            </label>
            <div className="form-inline">
              <div className="custom-control custom-checkbox my-1">
                <input
                  type="checkbox"
                  id="selectedSalario"
                  name="selected_salario"
                  className="custom-control-input"
                  checked={form.selected_salario}
                  onChange={handleChangeSelectElement}
                />
                <label
                  htmlFor="selectedSalario"
                  className="custom-control-label"
                ></label>
              </div>
              <select
                className="custom-select my-1 mr-2"
                name="salario"
                value={form.salario}
                onChange={handleChangeEmpleoBuscador}
              >
                {formDataEmpleoBuscador.salario.map(salario => (
                  <option key={salario.id} value={salario.id}>
                    {salario.nombre}
                  </option>
                ))}
              </select>
              <select
                className="custom-select my-1 mr-2"
                name="moneda"
                value={form.moneda}
                onChange={handleChangeEmpleoBuscador}
              >
                {formDataEmpleoBuscador.moneda.map(moneda => (
                  <option key={moneda.id} value={moneda.id}>
                    {moneda.nombre}
                  </option>
                ))}
              </select>
              <select
                className="custom-select my-1 mr-2"
                name="utemporal"
                value={form.utemporal}
                onChange={handleChangeEmpleoBuscador}
              >
                {formDataEmpleoBuscador.utemporal.map(utemporal => (
                  <option key={utemporal.id} value={utemporal.id}>
                    {utemporal.nombre}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-inline">
              <label
                htmlFor="busquedaempleo-salario_aproximado"
                className="control-label"
              >
                Salario Aproximado
              </label>
              <div className="custom-control custom-checkbox my-1 ml-2">
                <input
                  type="checkbox"
                  id="selectedSalarioAprox"
                  name="selected_salario_aprox"
                  className="custom-control-input"
                  checked={form.selected_salario_aprox}
                  onChange={handleChangeSelectElement}
                />
                <label
                  htmlFor="selectedSalarioAprox"
                  className="custom-control-label"
                ></label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="busquedaempleo-estado" className="control-label">
              Estado
            </label>
            <div className="form-inline">
              <div className="custom-control custom-checkbox my-1">
                <input
                  type="checkbox"
                  id="selectedEstado"
                  name="selected_estado"
                  className="custom-control-input"
                  checked={form.selected_estado}
                  onChange={handleChangeSelectElement}
                />
                <label
                  htmlFor="selectedEstado"
                  className="custom-control-label"
                ></label>
              </div>
              <select
                className="custom-select estado-mx"
                name="estado"
                value={form.estado}
                onChange={handleChangeEmpleoBuscador}
              >
                {formDataEmpleoBuscador.estado.map(estado => (
                  <option key={estado.id} value={estado.id}>
                    {estado.nombre}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-sm-6 col-md-6 avanzada"></div>
            <div className="col-6 col-sm-6 col-md-6">
              <button type="submit" className="btn btn-success">
                Buscar
              </button>
            </div>
          </div>
        </form>
      </article>
    </>
  );
}

export default FormEmpleoBuscador;

FormEmpleoBuscador.propTypes = {
  history: PropTypes.any,
  redirect: PropTypes.bool
};
