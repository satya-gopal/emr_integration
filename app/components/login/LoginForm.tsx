"use client";
import { FunctionComponent, useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import styles from "./LoginForm.module.css";

export type LoginFormType = {
  className?: string;
};

const LoginForm: FunctionComponent<LoginFormType> = ({ className = "" }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className={[styles.loginform, className].join(" ")}>
      <div className={styles.pagetitle}>
        <h2 className={styles.welcomeBack}>Welcome Back</h2>
        <p className={styles.loginIntoYour}>Login into your account</p>
      </div>
      <div className={styles.inputgroup}>
        <div className={styles.formgroup}>
          <div className={styles.formgroup}>
            <TextField
              className={styles.inputemail}
              color="primary"
              defaultValue="Email"
              variant="outlined"
              sx={{ "& .MuiInputBase-root": { height: "50px" } }}
            />
            <TextField
              className={styles.inputemail}
              color="primary"
              label="Password"
              defaultValue="Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleShowPasswordClick}
                      aria-label="toggle password visibility"
                    >
                      <Icon>
                        {showPassword ? "visibility_off" : "visibility"}
                      </Icon>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ "& .MuiInputBase-root": { height: "50px" } }}
            />
          </div>
          <a className={styles.forgotPassword}>Forgot Password</a>
        </div>
        <Button
          className={styles.loginbutton}
          disableElevation
          color="primary"
          variant="contained"
          sx={{ borderRadius: "0px 0px 0px 0px" }}
        >
          Log In
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
