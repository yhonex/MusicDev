import React from "react";
import login1 from "../assets/img/login1.gif";
import LoginButton from "../components/LoginButton";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div>
        <img src={login1} alt="" className="login-img" />
        <br />
        <span className="login-text">Bienvenido a MusicDev</span>
        <br />
        <span>Logeate para acceder a todo nuestro contenido!</span>
      </div>
      <LoginButton />
    </div>
  );
};

export default LoginPage;
