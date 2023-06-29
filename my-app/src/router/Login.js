import { useEffect, useState } from "react";
import styles from "./Login.module.css"

//https://2mojurmoyang.tistory.com/192 참고했음

/*function kakaoLogin() {
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
      }*/


/*function Kakao() {
  useEffect(() => {

    const script = document.createElement("script")
    script.src = "https://developers.kakao.com/sdk/js/kakao.js"

    window.Kakao.init("4a0465204124cb18162eedbb5ffd63a3");

    document.body.appendChild(script)
  })
}*/

function Login() {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const { Kakao } = window;

  const kakaoLogin = async () => {
    await Kakao.Auth.login({
      success(res) {
        console.log(res);
        Kakao.Auth.setAccessToken(res.access_token);
        console.log("카카오 로그인 성공");

        Kakao.API.request({
          url: "/v2/user/me",
          success(res) {
            console.log("카카오 인가 요청 성공");
            setIsLogin(true);
            const kakaoAccount = res.kakao_account;
            localStorage.setItem("email", kakaoAccount.email);
            localStorage.setItem(
              "profileImg",
              kakaoAccount.profile.profile_image_url
            );
            localStorage.setItem("nickname", kakaoAccount.profile.nickname);
          },
          fail(error) {
            console.log(error);
          },
        });
      },
      fail(error) {
        console.log(error);
      },
    });
  };

  useEffect(() => {
    const initKakao = async () => {
    const jsKey = "4a0465204124cb18162eedbb5ffd63a3";
    if (Kakao && !Kakao.isInitialized()) {
      await Kakao.init(jsKey);
      console.log(`kakao 초기화 ${Kakao.isInitialized()}`);
      }
    };
    initKakao();
  }, [Kakao]);
  return (
    <div className={styles.parent}>
      <div className={styles.Banner}>
        <div style={{ paddingTop: "90px" }}>
          <a href="#!" style={{ cursor: "pointer" }} onClick={kakaoLogin}><img alt="카카오 로그인" src="https://www.gb.go.kr/Main/Images/ko/member/certi_kakao_login.png" /></a>
        </div>
      </div>
    </div>

  )
}

export default Login;