import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import Sidebar from "./SideBar";

function NavBar() {
  return (
    <div className={styles.NavBody}>
      <div className={styles.SideNav}>
        <div className={styles.leftElement}>
          <Sidebar width={320} />
          <div className={styles.Title}>
            <Link to={"/"}>온상</Link>
          </div>
        </div>
        <div className={styles.d}>
          <Link data-cy="login-button" className={styles.d} to="/auth/login?next=/">로그인/가입</Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
