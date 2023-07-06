import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";

import SignIn from "./button";
import Sidebar from "./SideBar"; // 왼쪽 메뉴바 components
// 상단 메뉴바에 왼쪽 사이드 메뉴바 버튼 있어서 여기로 import 함

function NavBar() { // 상단 메뉴바

  const Style = {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
  }
  return (
    <div className={styles.NavBody}>
      <div className={styles.SideNav}>
        <div className={styles.leftElement}>
          <Sidebar /> {/*왼쪽 메뉴바*/}
          <div className={styles.Title}>
            <Link to={"/onSang"} style={Style}>온상</Link> {/*메인 페이지 이동*/}
          </div>
        </div>
        <div className={styles.rightElement}>
          <div className={styles.Login}>
            <SignIn />
          </div>
          {/*<div className={styles.Signin}>
            <Link to={"/onSang/Register"} style={Style}>상담사 회원가입</Link> 
          </div>*/}
        </div>
      </div>
    </div>
  )
}

export default NavBar;
