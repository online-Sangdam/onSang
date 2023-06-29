
// react 기본 파일

import styles from "./Home.module.css"

function Home() {

  return (
    <div className={styles.parent}>
      <div className={styles.Banner}>
        <div style={{ paddingTop: "145px" }}>
          <div style={{ fontSize: "50px", fontWeight: "bold" }}>온상</div>
          <div style={{ fontSize: "20px", paddingTop: "30px" }}>여러분의 온라인 상담을 해드립니다.</div>
        </div>
      </div>
    </div>
  )
}

export default Home;