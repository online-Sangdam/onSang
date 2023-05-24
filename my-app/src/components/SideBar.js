import React, { useRef, useState } from "react";
import styles from "./SideBar.module.css";
import sideBtn from "../img/SideBtn.png";
import { Link } from "react-router-dom";

const Sidebar = ({ width = 280, children }) => {

  const [xPosition, setX] = useState(width);
  const side = useRef();

  const menus = [
    { id: "1", name: "Select", path: "/Select" },
    { id: "2", name: "MENU 2", path: "/" },
  ];

  // button 클릭 시 토글
  const toggleMenu = () => {
    if (xPosition > 0) {
      setX(0);
    } else {
      setX(width);
    }
  };

  return (
    <div>
      <img src={sideBtn} alt="contact open button" className={styles.button} onClick={() => toggleMenu()} />
      <div className={styles.container}>
        <div ref={side} className={styles.sidebar} style={{ width: `${width}px`, height: '100%', transform: `translatex(${-xPosition}px)` }}>

          <div className={styles.exitButton} onClick={() => toggleMenu()}>X</div>
          <div className={styles.content}>
            {menus.map((menu) => {
              return (
                <Link 
                  key={menu.id}
                  onClick={() => toggleMenu()}
                  exact
                  style={{ color: "white", textDecoration: "none", paddingTop: "40px" }}
                  to={`/onSang${menu.path}`}
                  >{menu.name}</Link>
              )
            })}

          </div>

        </div>
      </div>
    </div>
  );
};


export default Sidebar;