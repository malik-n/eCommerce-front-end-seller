/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import Stack from "@mui/material/Stack";

function VerifyOTP({ email }) {
  let navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [isLoader, setIsLoader] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoader(true);
      await axios({
        method: "POST",
        url: "/api/v1/confirm",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          confirmationOtp: otp,
          email,
        },
      });
      return navigate("/login");
    } catch {
      console.error("something went wrong");
    }
  };

  const handleOtp = (event) => {
    setOtp(event.target.value);
  };

  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <input type="number" placeholder="Enter OTP" onChange={handleOtp} />
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
    </div>
  );
}

export default VerifyOTP;
