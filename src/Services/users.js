import Axios from "axios";
import { endpoints } from "./Index";

const addUsers = async (body) => {
  const config = {
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
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

const logout = async (body) => {
  const config = {
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
    },
  };
  const response = await Axios.post(endpoints.users.logoutUser, body, config);
  return response.data;
};

export { addUsers, signIn, logout };
