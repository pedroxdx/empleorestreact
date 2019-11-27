import React, { useState, useRef } from "react";
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";
import validator from "validator";

function FormRecuperarPassword() {
  const refHtmlForm = useRef(null);

  const [email, setEmail] = useState("");

  const handleSubmit = (e, formData, inputs) => {
    e.preventDefault();
    handleReset();
  };

  const handleReset = () => {
    let formRef = refHtmlForm.current;
    setEmail("");
    formRef.resetValidationState(true);
  };

  return (
    <>
      <ValidationForm onSubmit={handleSubmit} ref={refHtmlForm}>
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
        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary">
            Enviar Correo
          </button>
        </div>
      </ValidationForm>
    </>
  );
}

export default FormRecuperarPassword;
