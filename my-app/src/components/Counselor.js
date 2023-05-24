import {Link} from "react-router-dom";
import styles from "./Counselor.module.css";

function Counselor({name, img, profile, id}) {
  return(
    <div className={styles.body}>
      <div className={styles.top}>
        <div className={styles.left}>
          <img src={img} alt="person"/>
          <div className={styles.name}>{name}</div>
        </div>
        <Link className={styles.right} to={`/onSang/counselor/${id}`}>카톡</Link>
      </div>
      <div className={styles.profile}>
        {profile}
      </div>
    </div>
  )
}

export default Counselor