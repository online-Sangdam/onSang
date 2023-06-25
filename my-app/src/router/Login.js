import { useEffect } from "react";
import styles from "./Login.module.css"

function Kakao() {
  useEffect(() => {

    const script = document.createElement("script")
    script.src = "https://developers.kakao.com/sdk/js/kakao.js"

    window.Kakao.init("4a0465204124cb18162eedbb5ffd63a3");

    function kakaoLogin() {
      window.Kakao.Auth.login({
        scope: 'profile_nickname, account_email, gender',
        success: function(authObj) {
          console.log(authObj);
          window.Kakao.API.request({
            url: '/v2/user/me',
            success: res => {
              const kakao_account = res.kakao_account;
              console.log(kakao_account);
            }
          });
        }
      });
    }
    document.body.appendChild(script)
  })
}

function Login() {

  return (
    <div className={styles.parent}>
      <div className={styles.Banner}>
        <div style={{ paddingTop: "70px" }}>
          <a href="javascript:kakaoLogin();"><img src="https://www.gb.go.kr/Main/Images/ko/member/certi_kakao_login.png" /></a>
          <div>Spring 공부 후 개발 및 연동 예정</div>
        </div>
      </div>
    </div>

  )
}

export default Login;