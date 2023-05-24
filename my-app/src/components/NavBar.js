import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import Sidebar from "./SideBar";

function NavBar() {

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
          <Sidebar width={320} />
          <div className={styles.Title}>
            <Link to={"/onSang"} style={Style}>온상</Link>
          </div>
        </div>
        <div className={styles.Login}>
          <Link to={"/onSang/Login"} style={Style}>로그인</Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
