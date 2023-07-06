import React, { useState } from "react";
import SignIn from "./SignIn";
import { isLoginSuccess, setLoginSuccess } from "./loginState";

function Button() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  function handleLogout() {
    setLoginSuccess(false);
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
      <SignIn isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
}

export default Button;
