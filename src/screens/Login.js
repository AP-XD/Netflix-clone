import React, { useEffect, useState } from "react";
import SignInScreen from "./SignInScreen"
import "./Login.css";
function Login() {

  const [signIn, setSignIn] = useState(false);
  return (
    <div className="login">
      <div className="login__bg">
        <img
          className="login__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button className="login__sign" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="login__vignette" />
      </div>

      <div className="login__body">
        {signIn ? (
          <SignInScreen />
        ) : (
          <>
            <h1>Unlimited movies, TV shows and more.</h1>

            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="login__input">
              <form action="">
                <input type="email" placeholder="Email Address" />
                <button
                  className="login__start"
                  onClick={() => setSignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
