import React from "react";
import { HeaderApp, FooterApp, HeaderPage } from "./Secciones";
import FormEmpleoBuscador from "../components/FormEmpleoBuscador";
import EmpleosDisponiblesList from "../components/EmpleosDisponiblesList";

function Empleos(props) {
  return (
    <>
      <HeaderApp />
      <HeaderPage title="Empleos" />
      <section className="empleos-buscador">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-5">
              <FormEmpleoBuscador history={props.history} />
            </div>
            <div className="col-12 col-sm-6 col-md-7">
              <EmpleosDisponiblesList />
            </div>
          </div>
        </div>
      </section>
      <FooterApp />
    </>
  );
}

export default Empleos;
