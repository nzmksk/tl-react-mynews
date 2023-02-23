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
  const LOCAL_STORAGE_KEY = "USER";
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState({ message: "", severity: "success" });
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem(LOCAL_STORAGE_KEY) ?? false
  );

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
      setOpen(true);
      setAlert({ message: "Fields cannot be empty.", severity: "error" });
    }
    // If login credential is valid
    else if (username === "John" && password === "12345") {
      setIsLoggedIn(!isLoggedIn);
      localStorage.setItem(LOCAL_STORAGE_KEY, !isLoggedIn);
      navigate("/home");
    }
    // If login credential is invalid
    else {
      setOpen(true);
      setAlert({
        message: "Username and password do not match.",
        severity: "warning",
      });
    }
  };

  // Close alert message
  const handleClose = () => {
    setOpen(false);
    setAlert({ message: "", severity: "" });
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
      <div>
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
        </Box>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          TransitionComponent={SlideTransition}
        >
          <Alert
            onClose={handleClose}
            severity={alert.severity}
            sx={{ width: "100%" }}
          >
            {alert.message}
          </Alert>
        </Snackbar>
      </div>
    );
  }
}

export default Login;
