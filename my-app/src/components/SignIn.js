import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SignIn.module.css";

function SignIn({ isOpen, setIsOpen }) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  function loginHandler(e) {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function loginClickHandler() {
    const { email, password } = state;
    fetch("http://10.58.2.17:8000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }

  function handleKakaoLogin() {
    Kakao.Auth.login({
      success: function(authObj) {
        // Get KakaoTalk access token from authObj and use it for server-side authentication
        const accessToken = authObj.access_token;
        // Send the access token to your server and handle authentication there
        // ...
      },
      fail: function(err) {
        console.log("Kakao login failed:", err);
      },
    });
  }

  return (
    <>
      {isOpen ? (
        <div className={styles.modal}>
          <div onClick={(e) => e.stopPropagation()}>
            <div className={styles.loginModal}>
              <span className={styles.close} onClick={() => setIsOpen(false)}>
                &times;
              </span>
              <div className={styles.modalContents} onClick={(e) => e.stopPropagation()}>
                {/* Rest of the JSX */}
                <input
                  name="email"
                  className={styles.loginId}
                  type="text"
                  placeholder="아이디"
                  value={state.email}
                  onChange={loginHandler}
                />
                <input
                  name="password"
                  className={styles.loginPw}
                  type="password"
                  placeholder="비밀번호"
                  value={state.password}
                  onChange={loginHandler}
                />
                <div className={styles.socialBox}>
                  <div className={styles.kakao} onClick={handleKakaoLogin}>
                    <img className={styles.kakaoLogo} src="/Images/SignIn/kakao.png" alt="Kakao" />
                    <div className={styles.kakaoText}>카카오 계정으로 로그인</div>
                  </div>
                  {/* Other social login buttons (e.g., Facebook) can be added similarly */}
                </div>
                {/* Rest of the JSX */}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default SignIn;
