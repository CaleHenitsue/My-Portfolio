import { useRef, useEffect } from "react";

const Stars = () => {
  const starsRef = useRef(null);
  useEffect(() => {
    const container = starsRef.current;
    const starCount = 50;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.animationDelay = Math.random() * 3 + "s";
      container.appendChild(star);
    }
    return () => {
      container.innerHTML = "";
    };
  }, []);
  return (
    <div
      ref={starsRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
    ></div>
  );
};

export default Stars;
