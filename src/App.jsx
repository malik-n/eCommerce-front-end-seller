import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navigation from "./components/Layout/Navbar";
import Hero from "./components/Dashboard/Hero";
import Layout from "./components/Layout/index";
//paths
import "./App.css";
import "./components/Dashboard/Hero.css";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [notification, setNotification] = useState(true);

  const notificationTimeout = () => {
    const timeoutID = setTimeout(() => {
      setNotification(false);
    }, 5000);
    return () => {
      clearTimeout(timeoutID);
    };
  };

  const handleClose = () => {
    setNotification(false);
  };

  const handleNotification = () => {
    setNotification(true);
    notificationTimeout();
  };

  useEffect(() => {
    location.state?.isLoggedIn ? null : navigate("/");
    notificationTimeout();
  }, [location.state?.isLoggedIn, navigate]);

  // if (!location.state?.isLoggedIn) {
  //   return "Loaddiinng.....";
  // }

  return (
    <div>
      <Hero />
      {/* {notification ? (
        <p>
          Logged in Successfully <sup onClick={handleClose}>x</sup>
        </p>
      ) : (
        <div>
          <p>Notification closed. </p>
          <p onClick={handleNotification}>Show notification</p>
        </div>
      )} */}
    </div>
  );
};

export default App;
