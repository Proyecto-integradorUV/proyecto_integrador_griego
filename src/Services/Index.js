//Estas urls son provicionales
const URL = "https://jesus.pythonanywhere.com";

const endpoints = {
  users: {
    registerUser: `${URL}/users/signup/`,
    loginUser: `${URL}/users/login/`,
    logoutUser: `${URL}/users/logout/`,
    updateUser: (userId) => `${URL}/users/update_user/${userId}/`,
  },
};

const token = () => {
  const userData = localStorage.getItem("userData");
  const parsedUserData = JSON.parse(userData);
  const tokenAcces = parsedUserData.token;
  console.log(tokenAcces);
  return tokenAcces;
};

export { endpoints, token };
