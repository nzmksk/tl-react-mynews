import {
  Alert,
  Box,
  Button,
  Slide,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const LOCAL_STORAGE_KEY = {
    username: "username",
    loginStatus: "isLoggedIn",
  };
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.loginStatus)) ?? false
  );
  const [openMessage, setOpenMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    message: "",
    severity: "success",
  });

  // Filling login form
  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  // Form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = loginForm;

    // If field is empty
    if (!username || !password) {
      setOpenMessage(true);
      setErrorMessage({
        message: "Fields cannot be empty.",
        severity: "error",
      });
    }
    // If login credential is valid
    else if (username === "John" && password === "12345") {
      setIsLoggedIn(!isLoggedIn);
      localStorage.setItem(
        LOCAL_STORAGE_KEY.username,
        JSON.stringify(username)
      );
      localStorage.setItem(
        LOCAL_STORAGE_KEY.loginStatus,
        JSON.stringify(!isLoggedIn)
      );
      navigate("/home");
    }
    // If login credential is invalid
    else {
      setOpenMessage(true);
      setErrorMessage({
        message: "Username and password do not match.",
        severity: "warning",
      });
    }
  };

  // Close alert message
  const handleClose = () => {
    setOpenMessage(false);
    setErrorMessage({ message: "", severity: "" });
  };

  function SlideTransition(props) {
    return <Slide {...props} direction="down" />;
  }

  // If user is already logged in, redirect to Home page
  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }
  // Otherwise, show the Login page
  else {
    return (
      <Box
        component="form"
        method="post"
        onSubmit={handleSubmit}
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
          onChange={handleFieldChange}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          size="small"
          margin="dense"
          value={loginForm.password}
          onChange={handleFieldChange}
        />
        <Button
          variant="contained"
          size="medium"
          type="submit"
          sx={{ margin: "20px" }}
        >
          Login
        </Button>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={openMessage}
          autoHideDuration={5000}
          onClose={handleClose}
          TransitionComponent={SlideTransition}
        >
          <Alert
            onClose={handleClose}
            severity={errorMessage.severity}
            sx={{ width: "100%" }}
          >
            {errorMessage.message}
          </Alert>
        </Snackbar>
      </Box>
    );
  }
}

export default Login;
