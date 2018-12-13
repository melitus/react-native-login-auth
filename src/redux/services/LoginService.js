const API_URL = "https://pure-fortress-46948.herokuapp.com/api/v1/login";

const LoginService = user => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  };

  return fetch(API_URL, requestOptions);
};

export default LoginService;
