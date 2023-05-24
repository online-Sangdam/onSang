import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css"

function Login() {

  return (
    <div className={styles.parent}>
      <div className={styles.Banner}>
        <div style={{paddingTop: "70px"}}>
          <div>로그인 창</div>
          <div>Spring 공부 후 개발 및 연동 예정</div>
        </div>
      </div>
    </div>
  )
}

export default Login;