import Axios from "axios";
// import { async } from "q";
import { endpoints, token } from "./Index";

const addUsers = async (body) => {
  let aux = localStorage.getItem("userData");
  aux = JSON.parse(aux);
  const token = aux.access;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await Axios.post(endpoints.users.registerUser, body, config);
  return response.data;
};

const signIn = async (body) => {
  const config = {
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
    },
  };

  const response = await Axios.post(endpoints.users.loginUser, body, config);
  return response.data;
};

export { addUsers, signIn };
