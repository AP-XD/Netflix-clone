import React, { useEffect, useRef, useState } from "react";
import { auth } from "../firebase";
import "./SignInScreen.css";

function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);



  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
    })
      .catch((err) => {
        alert(err.message);
      })
  };
  const signin = (e) => {
    e.preventDefault();
    auth.signInwithEmailAndPassword(emailRef.current.value, passwordRef.current.value).then((authUser) => {
      console.log(authUser);
    }).catch((err) => {
      alert(err.message);
    })
  };
  return (
    <div className="signin">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email Address" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signin}>Sign In</button>
        <h4>
          <span className="gray"> New to Netflix? </span>
          <span className="link" onClick={register}> Sign up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
