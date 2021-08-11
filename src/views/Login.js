import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import mainLogo from "../photos/Logojpeg.jpg";
import { auth, provider } from "../firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
import { Grid } from "@material-ui/core";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
          <div className="login">
            <div className="login__logo">
              <img src={mainLogo} alt="logo"></img>
            </div>
            <Button type="submit" onClick={signIn}>
              Sign In with Google
            </Button>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="meditate">
            <img
              src="https://images.unsplash.com/photo-1579291465628-98115e927a42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
              alt="namaste"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
