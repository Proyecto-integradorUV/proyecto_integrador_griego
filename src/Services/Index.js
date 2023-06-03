//Estas urls son provicionales
const URL = "https://jesus.pythonanywhere.com";

const endpoints = {
  users: {
    registerUser: `${URL}/users/signup/`,
    loginUser: `${URL}/users/login/`,
    logoutUser: `${URL}/users/logout/`,
  },
};

const token = () => {
  let aux = localStorage.getItem("userData");
  aux = JSON.parse(aux);
  const tokenAcces = aux.access;
  return tokenAcces;
};

export { endpoints, token };
