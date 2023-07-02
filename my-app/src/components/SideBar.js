import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./SideBar.module.css";
import sideBtn from "../img/SideBtn.png"; // 버튼 이미지

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

  // 화면 크기 변화에 따라 SideBar 닫기
  const handleResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 768) {
      setX(width);
    } else {
      // If the screen size is less than or equal to 768px, set the Sidebar width to a smaller value
      setX(width); // You can adjust the value as per your requirement
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <img
        src={sideBtn}
        alt="contact open button"
        className={styles.button}
        onClick={() => toggleMenu()}
      />
      <div className={styles.container}>
        <div
          ref={side}
          className={styles.sidebar}
          style={{
            width: `${width}px`, // Update the width with xPosition
            height: "100%",
            transform: `translatex(${-xPosition}px)`,
          }}
        >
          <div className={styles.exitButton} onClick={() => toggleMenu()}>
            X
          </div>
          <div className={styles.content}>
            {menus.map((menu) => {
              return (
                <div
                  style={{
                      paddingTop: "40px",
                  }}
                  >
                  <Link
                    key={menu.id}
                    onClick={() => toggleMenu()}
                    style={{
                      color: "black",
                      textDecoration: "none",
                    }}
                    to={`/onSang${menu.path}`}
                  >
                    {menu.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
