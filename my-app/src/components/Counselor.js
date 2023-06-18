import {Link} from "react-router-dom";
import styles from "./Counselor.module.css";

function Counselor({name, img, profile, id, introduction}) { // Select Router 에서 받아온 props
  return(
    <div className={styles.body}>
      <div className={styles.top}>
        <div className={styles.left}>
          <img src={img} alt="person"/> {/*상담사 이미지*/}
          <div className={styles.name}>{name}</div> {/*상담사 이름*/}
        </div>
        <Link className={styles.right} to={`/onSang/counselor/${id}`}>카톡</Link> {/*오픈카톡 주소*/}
      </div>
      <div className={styles.profile}> {/*상담사 자기소개*/}
        {profile}
      </div>

      <div className={styles.introduction}> {/*상담사 자기소개*/}
        {introduction}
      </div>

    </div>
  )
}

export default Counselor