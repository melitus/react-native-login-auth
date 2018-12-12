const API_URL = "http://192.168.8.104:3030/api/v1/login";

const LoginService = ({email, password}) => {
  console.log("from service ", {email, password});
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
};

  return fetch(API_URL, requestOptions);
}

export default LoginService;
