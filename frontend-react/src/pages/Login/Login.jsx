import React from "react";
import LoginPageSVG from "../../components/svg/LoginPageSVG.svg";
import Teaching from "../../components/svg/Teaching.svg";
import avatar from "../../components/svg/avatar.svg";
import logo from "../../assects/logo.png";
import "./Login.css";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Password from "@mui/icons-material/Password";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom"


export default function Login() {
  return (
    <div className="loginContainer">
      <div>
        <img className="bgimg" alt="bg" src={LoginPageSVG} />
        <div className="titleContainer">
          <img className="logo" alt="logo" src={logo} />
          <h1 className="title">A2 PRIORA</h1>
        </div>
        <img className="bannerimg" alt="banner" src={Teaching} />
      </div>
      <div className="textBoxContainer">
        <img className="avatar" alt="avatar" src={avatar} />
        <h1 className="welcome">WELCOME</h1>
        <div className="inputfields">
          <TextField
            id="input-with-icon-textfield"
            label="Login Id"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            sx={{
              boxShadow: 10,
              border: "100px",
            }}
          />
          <TextField
            id="input-with-icon-textfield"
            label="Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Password />
                </InputAdornment>
              ),
            }}
            sx={{
              boxShadow: 10,
            }}
          />
        </div>
        <div className="btn-pass">
          <a href="#" className="forgetpass">
            Forget Password?
          </a>
          <div className="loginButton">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FA80DB",
                borderRadius: "200px",
                width: "10vw",
                height: "3vw",
                fontSize: "1.2vw",
                boxShadow: 10,
                ":hover": {
                  backgroundColor: "#ff00e1",
                },
              }}
            >
              LogIn
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
