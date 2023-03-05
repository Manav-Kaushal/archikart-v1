import { useEffect, useState } from "react";

const useScroll = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [isShrunk, setIsShrunk] = useState(false);

  const handleScroll = () => {
    setScrollPos(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsShrunk(scrollPos > 0);
  }, [scrollPos]);

  return { isShrunk };
};

export default useScroll;
