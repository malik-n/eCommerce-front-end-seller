import axios from "axios";
import { useState } from "react";
import VerifyOTP from "./VerifyOTP";
import LoadingButton from "@mui/lab/LoadingButton";
import Stack from "@mui/material/Stack";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsResgistered] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoader(true);
      const result = await axios({
        method: "POST",
        url: "/api/v1/register",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          email: username,
          name,
          password,
        },
      });
      setIsResgistered(true);
      console.log("result", result);
    } catch {
      console.error("Something went wrong");
    }
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      {isRegistered ? (
        <VerifyOTP email={username} />
      ) : (
        <form action="submit" onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" onChange={handleName} />
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
        </form>
      )}
    </>
  );
};

export default SignUp;
