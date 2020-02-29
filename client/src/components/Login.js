import React from "react";

const Login = () => {
  // make a post request to retrieve a token from the api
  const [login, setLogin] = useState({
    username: '',
    password: ''
  });

  const handleChange = event => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
        .post('login', login)
        .then(response => {
            console.log("response", response)
            localStorage.setItem('token', response.data.payload)
            props.history.push("/colors"); 
        // colors now has be made a protected route
        // props.history.push re-directs you to another page
        })
        .catch(error => {
            console.log(`login error: ${error}`);
        });
};

  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
    </>
  );
};

export default Login;
