import axios from "axios";

import {
  GET_EMPLEOS_DISPONIBLES,
  GET_FORM_DATA_EMPLEO_BUSCADOR,
  SET_FORM_DATA_EMPLEO_BUSCADOR,
  GET_USER_DATA
} from "./types";

export const getFormEmpleoBuscador = api => {
  return async dispatch => {
    let payload = await getFormEmpleoBuscadorAPI(api);
    dispatch({
      type: GET_FORM_DATA_EMPLEO_BUSCADOR,
      payload
    });
  };
};

export const setFormEmpleosBuscador = payload => {
  return dispatch => {
    dispatch({
      type: SET_FORM_DATA_EMPLEO_BUSCADOR,
      payload
    });
  };
};

export const getEmpleosDisponibles = (api, formEmpleoBuscador) => {
  return async dispatch => {
    let payload = await getEmpleosDisponiblesAPI(api, formEmpleoBuscador);
    dispatch({
      type: GET_EMPLEOS_DISPONIBLES,
      payload
    });
  };
};

export const registerUser = (api, form) => {
  return async dispatch => {
    let response = await registerUserAPI(api, form);
    dispatch({
      type: GET_USER_DATA,
      payload: response.user
    });
    return response;
  };
};

export const loginUser = (api, form) => {
  return async dispatch => {
    let response = await loginUserAPI(api, form);
    dispatch({
      type: GET_USER_DATA,
      payload: response.user
    });
    return response;
  };
};

export const getUserByAuth = (api, auth) => {
  return async dispatch => {
    let response = await getUserByAuthAPI(api, auth);
    dispatch({
      type: GET_USER_DATA,
      payload: response
    });
    return response;
  };
};

export const logOut = () => {
  return dispatch => {
    dispatch({
      type: GET_USER_DATA,
      payload: {}
    });
  };
};

const getEmpleosDisponiblesAPI = async (api, formEmpleoBuscador) => {
  try {
    let response = await axios.post(
      `${api.url}/api/buscar-empleo`,
      { form: formEmpleoBuscador },
      api.httpHeaders
    );
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

/*
const getFormEmpleoBuscadorAPI = async api => {
  if (localStorage.getItem("formEmpleoBuscador") === null) {
    console.log("API");
    try {
      let response = await axios.get(
        `${api.url}/api/form-empleo-buscador`,
        api.httpHeaders
      );
      localStorage.setItem("formEmpleoBuscador", JSON.stringify(response.data));
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  } else {
    console.log("DB");
    let data = localStorage.getItem("formEmpleoBuscador");
    if (typeof data === "string") {
      return JSON.parse(data);
    }
  }
};
*/

const getFormEmpleoBuscadorAPI = async api => {
  try {
    let response = await axios.get(
      `${api.url}/api/form-empleo-buscador`,
      api.httpHeaders
    );
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

const registerUserAPI = async (api, form) => {
  try {
    const response = await axios.post(
      `${api.url}/api/register-user`,
      form,
      api.httpHeaders
    );
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

const loginUserAPI = async (api, form) => {
  try {
    const response = await axios.post(
      `${api.url}/api/login`,
      form,
      api.httpHeaders
    );
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

const getUserByAuthAPI = async (api, auth) => {
  try {
    const response = await axios.get(`${api.url}/api/user`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth}`
      }
    });
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};
