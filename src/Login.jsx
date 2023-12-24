import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoader, setIsLoader] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoader(true);
      const result = await axios({
        method: "POST",
        url: "/api/v1/login",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          email: username,
          password,
        },
      });
      console.log("result", result.data);
      localStorage.setItem("token", result.data.token);
      return navigate("/", { state: { isLoggedIn: true } });
    } catch {
      console.error("something went wrong");
    } finally {
      setIsLoader(false);
    }
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <label htmlFor="username">Email: </label>
      <input type="text" id="username" onChange={handleUsername} />
      <label htmlFor="password">Password: </label>
      <input type="password" id="password" onChange={handlePassword} />
      <Stack direction="row" spacing={2}>
        <LoadingButton
          loading={isLoader}
          loadingPosition="start"
          variant="outlined"
          type="submit"
        >
          Login
        </LoadingButton>
      </Stack>
      <p>
        Not registered? <Link to="/signup">SignUp</Link>
      </p>
    </form>
  );
};

export default Login;
