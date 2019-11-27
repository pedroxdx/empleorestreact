import React, { useState, useRef } from "react";
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";
import validator from "validator";

function FormContacto() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  const refHtmlForm = useRef(null);

  const handleSubmit = (e, formData, inputs) => {
    e.preventDefault();
    handleReset();
  };

  const handleReset = () => {
    let ref = refHtmlForm.current;
    setName("");
    setEmail("");
    setAsunto("");
    setMensaje("");
    ref.resetValidationState(true);
  };

  return (
    <>
      <ValidationForm onSubmit={handleSubmit} ref={refHtmlForm}>
        <div className="form-group">
          <label className="control-label" htmlFor="name">
            Nombre
          </label>
          <TextInput
            name="name"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            minLength="8"
            errorMessage={{
              minLength: "Se requiere un mínimo de {minLength} caracteres"
            }}
          />
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="email">
            Email
          </label>
          <TextInput
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            validator={validator.isEmail}
            errorMessage={{
              validator: "El campo Email no es válido."
            }}
          />
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="asunto">
            Asunto
          </label>
          <TextInput
            name="asunto"
            id="asunto"
            value={asunto}
            onChange={e => setAsunto(e.target.value)}
            required
            errorMessage={{
              required: "El campo Asunto es Requerido"
            }}
          />
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="mensaje">
            Mensaje
          </label>
          <TextInput
            name="mensaje"
            id="mensaje"
            value={mensaje}
            onChange={e => setMensaje(e.target.value)}
            multiline
            required
            rows="6"
            errorMessage={{
              required: "El campo Mensaje es Requerido"
            }}
          />
        </div>
        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </ValidationForm>
    </>
  );
}

export default FormContacto;
