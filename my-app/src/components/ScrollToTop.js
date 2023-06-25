import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() { // 페이지 이동시 상단으로 올려주는 copmoents
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}