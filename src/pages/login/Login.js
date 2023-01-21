import { Box, Button, TextField, Typography } from "@mui/material";

function Login() {
  return (
    <div>
      <Typography
        variant="h3"
        align="center"
        mt={5}
        sx={{ backgroundColor: "red" }}
      >
        MyNews
      </Typography>
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        margin="auto"
        maxWidth={500}
        borderRadius={5}
        boxShadow="5px 5px 10px #ccc"
      >
        <Typography variant="h5">Login</Typography>
        <TextField
          variant="outlined"
          label="Username"
          type="text"
          size="small"
        />
        <TextField
          variant="outlined"
          label="Password"
          type="password"
          size="small"
        />
        <Button variant="contained" size="medium">
          Login
        </Button>
      </Box>
    </div>
  );
}

export default Login;
