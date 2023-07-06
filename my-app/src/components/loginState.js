import { useState, useEffect } from "react";

let isLoginSuccess = true;

function setLoginSuccess(status) {
  isLoginSuccess = status;
  console.log("isLoginSuccess updated:", isLoginSuccess);
}

export { isLoginSuccess, setLoginSuccess };
