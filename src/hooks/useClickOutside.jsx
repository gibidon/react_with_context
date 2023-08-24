import { useState } from "react";
import { useEffect } from "react";

export default function useClickOutside(elRef, callback) {
  console.log(elRef);
  useEffect(() => {
    console.log("useEffect strainght after mount");
    function clickHandler(e) {
      console.log("e.target: ", e.target, "elRef: ", elRef);
      if (elRef && !elRef.current.contains(e.target)) {
        console.log("outside");
        callback();
      }
    }
    window.addEventListener("click", clickHandler);
    return () => {
      window.removeEventListener("click", clickHandler);
    };
  }, []);
}
