import React, { useState } from "react";
import SignIn from "./SignIn";

function Button() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <a
        style={{ textDecoration: "none", color: "white", fontSize: "20px", fontWeight: "bold", cursor: "pointer" }}
        onClick={openModal}
      >
        로그인
      </a>
      <SignIn isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
}

export default Button;
