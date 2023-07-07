import React, { useState } from "react";
import styles from "./SignIn.module.css";
import KakaoLogin from "react-kakao-login";
import kakao from "../img/kakao.png"
import { setLoginSuccess } from "./loginState";

function SignIn({ isOpen, setIsOpen}) {
  function handleKakaoSuccess(response) {
    setLoginSuccess(true);
    setIsOpen(false);
  }

  function handleKakaoFail(error) {
    console.log("Kakao login failed:", error);
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
                <div className={styles.title}>온상</div>
                <div className={styles.socialBox}>
                  <KakaoLogin
                    token="f1cb92faf3857e66f7d43161b85e7b5d"
                    onSuccess={handleKakaoSuccess}
                    onFail={handleKakaoFail}
                    render={({ onClick }) => (
                      <div className={styles.kakao} onClick={onClick}>
                        <img className={styles.kakaoLogo} src={kakao} alt="Kakao" />
                        <div className={styles.kakaoText}>카카오 계정으로 로그인</div>
                      </div>
                    )}
                  />
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