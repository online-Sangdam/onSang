import { Link } from "react-router-dom";
import styles from "./Counselor.module.css";

function Counselor({ name, img, profile, id, introduction }) {
  return (
    <div className={styles.body}>
      <img src={img} alt="person" className={styles.image} /> {/* 상담사 이미지 */}
      <div className={styles.details}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.name}>{name}</div> {/* 상담사 이름 */}
            <div className={styles.profile}>{profile}</div> {/* 상담사 프로필 */}
          </div>
          <Link className={styles.right} to={`/onSang/counselor/${id}`}>
            카톡
          </Link>{" "}
          {/* 오픈카톡 주소 */}
        </div>
        <div className={styles.introduction}>{introduction}</div> {/* 상담사 자기소개 */}
      </div>
    </div>
  );
}

export default Counselor;
