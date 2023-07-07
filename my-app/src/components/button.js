import React, { useState } from "react";
import SignIn from "./SignIn";
import { setLoginSuccess, isLoginSuccess } from "./loginState";

function Button() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, setupdate] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setupdate(false);
  };

  function handleLogout() {
    setLoginSuccess(false);
    setupdate(true);
    // Logout시 rerender 진행이 안돼서 일단 임시방편.
  }

  return (
    <>
      {
        isLoginSuccess ?
          <a href="#!"
            style={{ textDecoration: "none", color: "white", fontSize: "20px", fontWeight: "bold", cursor: "pointer" }}
            onClick={handleLogout}
          >
            로그아웃
          </a>
          :
          <a href="#!"
            style={{ textDecoration: "none", color: "white", fontSize: "20px", fontWeight: "bold", cursor: "pointer" }}
            onClick={openModal}
          >
            로그인
          </a>
      }
      <SignIn isOpen={isModalOpen}
        setIsOpen={setIsModalOpen} />
    </>
  );
}

export default Button;
