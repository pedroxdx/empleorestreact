import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "./SystemMessages";

import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../store/actions";

import {
  ValidationForm,
  TextInput,
  Checkbox
} from "react-bootstrap4-form-validation";
import validator from "validator";

import { Link } from "react-router-dom";

function FormLogIn({ history }) {
  const dispatch = useDispatch();
  const appAPI = useSelector(state => state.appReducer.api);
  const refHtmlForm = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [isLogging, setIsLogging] = useState(false);
  const [errorsLoginUser, setErrorsLoginUser] = useState("");

  const handleSubmit = (e, formData, inputs) => {
    e.preventDefault();
    dispatch(loginUser(appAPI, formData)).then(response => {
      if (response.isLogging) {
        //history.push("/admin/dashboard");
        history.push("/");
      } else {
        setIsLogging(response.isLogging);
        setErrorsLoginUser(response.errors);
        handleReset();
      }
    });
  };

  const handleReset = () => {
    let ref = refHtmlForm.current;
    setEmail("");
    setPassword("");
    setRememberMe(false);
    ref.resetValidationState(true);
  };

  const handleMessageErrorClose = () => {
    setErrorsLoginUser("");
  };

  return (
    <>
      {errorsLoginUser.length !== 0 ? (
        <ErrorMessage
          message={errorsLoginUser}
          handleClose={handleMessageErrorClose}
        />
      ) : (
        ""
      )}
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
        <div className="form-group">
          <label className="control-label" htmlFor="password">
            Contraseña
          </label>
          <TextInput
            name="password"
            id="password"
            type="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            errorMessage={{
              required: "El campo Contraseña es Requerido"
            }}
          />
        </div>
        <div className="form-group">
          <Checkbox
            name="rememberMe"
            label="Recordarme"
            id="rememberMe"
            value={rememberMe}
            onChange={e => setRememberMe(e.target.checked)}
          />
        </div>
        <button type="submit" className="btn btn-primary mr-2">
          Login
        </button>
        <Link to="/recuperar-password" className="btn btn-success">
          Forgot your password
        </Link>
      </ValidationForm>
    </>
  );
}

export default FormLogIn;

FormLogIn.propTypes = {
  history: PropTypes.any
};
