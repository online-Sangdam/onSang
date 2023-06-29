import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";


import Sidebar from "./SideBar"; // 왼쪽 메뉴바 components
// 상단 메뉴바에 왼쪽 사이드 메뉴바 버튼 있어서 여기로 import 함

function NavBar() { // 상단 메뉴바

  const [inLogin, setinLogin] = useState(true);
  const location = useLocation();
  const [url, setUrl] = useState(location.pathname);
  useEffect(() => {
    console.log(location);
    setUrl(location.pathname);
    if (url === "/onSang/Login")
      setinLogin(true);
    else setinLogin(false);
  }, [url, location])


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
          <Sidebar width={320} /> {/*왼쪽 메뉴바*/}
          <div className={styles.Title}>
            <Link to={"/onSang"} style={Style}>온상</Link> {/*메인 페이지 이동*/}
          </div>
        </div>
        {
          inLogin ? <div></div> :
            <div className={styles.Login}>
              <Link to={"/onSang/Login"} style={Style}>로그인</Link> {/*로그인 페이지 이동*/}
            </div>
        }

      </div>
    </div>
  )
}

export default NavBar;
