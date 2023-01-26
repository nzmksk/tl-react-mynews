import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const handleLoginForm = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const submitLoginForm = (e) => {
    e.preventDefault();
    const userLoginInfo = Object.values(loginForm);
    if (userLoginInfo.some((value) => value === "")) {
      alert("Fields cannot be empty");
    } else if (
      loginForm.username === "John" &&
      loginForm.password === "12345"
    ) {
      navigate("/home");
    } else {
      // Need to alert wrong user login info
    }
  };

  return (
    <div>
      <Box
        component="form"
        method="post"
        onSubmit={submitLoginForm}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        margin="auto"
        mt={5}
        maxWidth={500}
        borderRadius={5}
        boxShadow="5px 5px 10px #ccc"
      >
        <Typography variant="h3" padding={2}>
          MyNews
        </Typography>
        <TextField
          label="Username"
          name="username"
          type="text"
          variant="outlined"
          size="small"
          margin="dense"
          value={loginForm.username}
          onChange={handleLoginForm}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          size="small"
          margin="dense"
          value={loginForm.password}
          onChange={handleLoginForm}
        />
        <Button
          variant="contained"
          size="medium"
          type="submit"
          sx={{ margin: "20px" }}
        >
          Login
        </Button>
      </Box>
    </div>
  );
}

export default Login;
