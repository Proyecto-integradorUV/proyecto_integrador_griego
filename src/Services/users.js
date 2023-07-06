import Axios from "axios";
import { endpoints, token } from "./Index";

const addUsers = async (body) => {
  try {
    const config = {
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
    };
    const response = await Axios.post(endpoints.users.registerUser, body, config);
    return response.data;
  } catch (error) {
    console.error("Error al registrar el usuario:", error);
    throw error;
  }
};

const signIn = async (body) => {
  try {
    const config = {
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
    };
    const response = await Axios.post(endpoints.users.loginUser, body, config);
    return response.data;
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
};

const logout = async () => {
  try {
    const config = {
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
    };
    const response = await Axios.post(endpoints.users.logoutUser, {}, config);
    return response.data;
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
    throw error;
  }
};

const updateUser = async (userId, body) => {
  const config = {
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
      Authorization: `Token ${token()}`,
    },
  };

  const response = await Axios.patch(
    endpoints.users.updateUser(userId),
    body,
    config
  );
  console.log(response.data);
  return response.data;
}

const createModule = async (body) => {
  try {
    const config = {
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
    };
    const response = await Axios.post(endpoints.module.createModule, body, config);
    return response.data;
  } catch (error) {
    console.error("Error al crear modulo", error);
    throw error;
  }
};

const createPrueba = async (body) => {
  console.log('Test creado', body);
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await Axios.post(endpoints.test.createTest, JSON.stringify(body), config);
    return response.data;
  } catch (error) {
    console.error("Error al enviar calificación:", error);
    throw error;
  }
};

const upDatePrueba = async (body) => {
  console.log('Test actualizado', body);
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await Axios.put(endpoints.test.upDateTest, body, config);
    return response.data;
  } catch (error) {
    console.error("Error al enviar calificación:", error);
    throw error;
  }
};

export { addUsers, signIn, logout, updateUser, createModule, createPrueba, upDatePrueba };