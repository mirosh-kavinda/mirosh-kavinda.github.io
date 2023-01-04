import { useEffect, useState } from "react";

export default function useBackToTop() {
  const [showButton, setShowButton] = useState(false);
  useEffect(
    () => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 50) {
          setShowButton(true);
          document.getElementById("mouse").style.display = "none";
        } else {
          setShowButton(false);
        }
      });
    },
    [],
    []
  );

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return { showButton, scrollToTop };
}
