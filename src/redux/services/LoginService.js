const API_URL = "http://localhost:3030/api/v1/login";

function LoginService(email, password) {
  return fetch(API_URL, {
    method: " POST",
    headers: {
      Accept: "application/json"
    },
    body: JSON.stringify(email, password)
  });
}

export default LoginService;
