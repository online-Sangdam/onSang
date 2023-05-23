import {NavLink} from "react-router-dom";
import styles from "./Counselor.module.css";

function Counselor({name, img, profile, id}) {
  return(
    <div className={styles.body}>
      <div className={styles.top}>
        <div className={styles.left}>
          <img src={img}/>
          <div className={styles.name}>{name}</div>
        </div>
        <NavLink className={styles.right} to={`/counselor/${id}`}>카톡</NavLink>
      </div>
      <div className={styles.profile}>
        {profile}
      </div>
    </div>
  )
}

export default Counselor