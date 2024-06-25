"use client";
import { FunctionComponent, useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import styles from "./SignPage.module.css";

export type SignPageType = {
  className?: string;
};

const SignPage: FunctionComponent<SignPageType> = ({ className = "" }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className={[styles.signpage, className].join(" ")}>
      <div className={styles.signIn}>
        <div className={styles.formsection}>
          <div className={styles.formcontent}>
            <img
              className={styles.labsquireLogoIcon}
              alt=""
              src="/labsquirelogo.svg"
            />
            <div className={styles.loginform}>
              <div className={styles.logingroup}>
                <div className={styles.loginformcontent}>
                  <div className={styles.titlecontent}>
                    <h2 className={styles.title}>Welcome Back</h2>
                    <p className={styles.paragraph}>Login into your account</p>
                  </div>
                  <div className={styles.inputcontent}>
                    <div className={styles.loginformcontent}>
                      <TextField
                        className={styles.inputTypeEmail}
                        color="primary"
                        defaultValue="Email ID"
                        variant="outlined"
                        type="email"
                        sx={{ "& .MuiInputBase-root": { height: "56px" } }}
                      />
                      <TextField
                        className={styles.inputTypeEmail}
                        color="primary"
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
                                  {showPassword
                                    ? "visibility_off"
                                    : "visibility"}
                                </Icon>
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        sx={{ "& .MuiInputBase-root": { height: "56px" } }}
                      />
                    </div>
                    <div className={styles.forgotpassword}>
                      <h5 className={styles.forgotPassword}>Forgot Password</h5>
                    </div>
                  </div>
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
          </div>
        </div>
        <div className={styles.imagesection}>
          <div className={styles.infogroup}>
            <div className={styles.infocontent}>
              <div className={styles.title1}>
                <div className={styles.titleheading}>
                  <img
                    className={styles.thumbimageIcon}
                    alt=""
                    src="/thumbimage@2x.png"
                  />
                  <h4 className={styles.title2}>EMR Integration Process</h4>
                </div>
              </div>
              <p className={styles.paragraph1}>
                Today, we create innovative solutions to the challenges that
                consumers face in both their everyday lives and events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignPage;
