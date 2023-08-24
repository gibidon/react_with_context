import { useEffect } from "react";
import { useState } from "react";

export function useClickCoordinates() {
  const [clickCoordinates, setClickCoordinates] = useState([0, 0]);

  function getCoordinates(e) {
    // return [e.clientX, e.clientY];
    setClickCoordinates([e.clientX, e.clientY]);
  }
  useEffect(() => {
    window.addEventListener("click", getCoordinates);
    return () => window.removeEventListener("click", getCoordinates);
  }, []);
  //   window.addEventListener("click", function (e) {
  //     console.log("useClick wirking");
  //     setClickCoordinates(getCoordinates(e));
  //     return getCoordinates(e);

  //   });
  return clickCoordinates;
}
