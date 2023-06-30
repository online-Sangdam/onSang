import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.parent}>
      <div className={styles.Banner}>
        <div className={styles.Block}>
          <div className={styles.Title}>온상</div>
          <div className={styles.Description}>여러분의 온라인 상담을 해드립니다.</div>
        </div>
      </div>
    </div>
  );
}

export default Home;