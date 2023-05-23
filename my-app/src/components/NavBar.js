import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import Sidebar from "./SideBar";

function NavBar() {

  const activeStyle = {
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
            <NavLink to={"/"} activeStyle={activeStyle}>온상</NavLink>
          </div>
        </div>
        <div className={styles.Login}>
          <NavLink to={"/"} activeStyle={activeStyle}>로그인</NavLink>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
