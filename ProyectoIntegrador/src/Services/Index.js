//Estas urls son provicionales
const URL = "http://127.0.0.1:8000";

const endpoints = {
  users: {
    registerUser: `${URL}/users/Pl/signup/`,
    loginUser: `${URL}/users/login/`,
  },
};

const token = () => {
  let aux = localStorage.getItem("userData");
  aux = JSON.parse(aux);
  const tokenAcces = aux.access;
  return tokenAcces;
};

export { endpoints, token };
