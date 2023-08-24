import { useEffect } from "react";

export default function usePaintGreen(el) {
  useEffect(() => {
    setTimeout(() => {
      console.log(el.current);
      el.current.style.background = "lightgreen";
    }, 2000);
  }, []);
}
