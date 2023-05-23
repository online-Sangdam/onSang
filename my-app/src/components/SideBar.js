import React, { useEffect, useRef, useState } from "react";
import styles from "./SideBar.module.css";
import sideBtn from "../img/SideBtn.png";
import { NavLink } from "react-router-dom";

const Sidebar = ({ width = 280, children }) => {

  const activeStyle = {
    background: 'black',
    color: 'white',
  };

  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(width);
  const side = useRef();

  const [menus, setMenus] = useState([
    { name: "Select", path: "/Select" },
    { name: "MENU 2", path: "/" },
  ]);

  // button 클릭 시 토글
  const toggleMenu = () => {
    if (xPosition > 0) {
      setX(0);
      setOpen(true);
    } else {
      setX(width);
      setOpen(false);
    }
  };

  menus.map((menu, index) => {
    console.log(menu);
  })
  return (
    <div>
      <img src={sideBtn} alt="contact open button" className={styles.button} onClick={() => toggleMenu()} />
      <div className={styles.container}>
        <div ref={side} className={styles.sidebar} style={{ width: `${width}px`, height: '100%', transform: `translatex(${-xPosition}px)` }}>

          <div className={styles.exitButton} onClick={() => toggleMenu()}>X</div>
          <div className={styles.content}>
            {menus.map((menu) => {
              return (
                <NavLink exact
                  style={{ color: "white", textDecoration: "none", paddingTop: "40px" }}
                  to={`${menu.path}`}
                  activeStyle={{ color: "white" }}>{menu.name}</NavLink>
              )
            })}

          </div>

        </div>
      </div>
    </div>
  );
};


export default Sidebar;