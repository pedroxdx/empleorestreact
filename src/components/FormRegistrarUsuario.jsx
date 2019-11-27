import React, { useState, useRef } from "react";
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";
import validator from "validator";

import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../store/actions";
import { ErrorMessage, SuccessMessage } from "./SystemMessages";

function FormRegistrarUsuario() {
  const dispatch = useDispatch();
  const appAPI = useSelector(state => state.appReducer.api);
  const refHtmlForm = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setConfirmationPassword] = useState("");

  const [isLogging, setIsLogging] = useState(false);
  const [errorsCreateUser, setErrorsCreateUser] = useState("");

  const handleSubmit = (e, formData, inputs) => {
    e.preventDefault();
    dispatch(registerUser(appAPI, formData)).then(response => {
      setIsLogging(response.isLogging);
      setErrorsCreateUser(response.errors);
      handleReset();
    });
  };

  const handleReset = () => {
    let ref = refHtmlForm.current;
    setName("");
    setEmail("");
    setPassword("");
    setConfirmationPassword("");
    ref.resetValidationState(true);
  };

  const matchPassword = value => {
    return value && value === password;
  };

  const handleMessageSuccessClose = () => {
    setIsLogging(false);
  };

  const handleMessageErrorClose = () => {
    setErrorsCreateUser("");
  };

  return (
    <>
      {isLogging ? (
        <SuccessMessage
          message="El Usuario se creo correctamente."
          handleClose={handleMessageSuccessClose}
        />
      ) : (
        ""
      )}
      {errorsCreateUser.length !== 0 ? (
        <ErrorMessage
          message={errorsCreateUser}
          handleClose={handleMessageErrorClose}
        />
      ) : (
        ""
      )}
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
            required
            errorMessage={{
              required: "El campo Nombre es Requerido"
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
          <label className="control-label" htmlFor="password">
            Contraseña
          </label>
          <TextInput
            name="password"
            id="password"
            type="password"
            required
            pattern="(?=.*[A-Z]).{6,}"
            value={password}
            onChange={e => setPassword(e.target.value)}
            errorMessage={{
              required: "El campo Contraseña es Requerido",
              pattern:
                "Se requiere un mínimo de 6 caracteres y debe contener al menos una letra capital."
            }}
          />
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="c_password">
            Reescribir Contraseña
          </label>
          <TextInput
            name="c_password"
            id="c_password"
            type="password"
            required
            validator={matchPassword}
            errorMessage={{
              required: "El campo Reescribir Contraseña es Requerido",
              validator:
                "El campo Contraseña y Reescribir Contraseña no son iguales."
            }}
            value={c_password}
            onChange={e => setConfirmationPassword(e.target.value)}
          />
        </div>
        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary">
            Registrar
          </button>
        </div>
      </ValidationForm>
    </>
  );
}

export default FormRegistrarUsuario;
