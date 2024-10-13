import React, { useState, useEffect } from "react";

const MovingText = ({ texts, speed = 350 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentCharIndex < texts[currentTextIndex].length) {
        setDisplayedText(
          (prev) => prev + texts[currentTextIndex][currentCharIndex]
        );
        setCurrentCharIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
        setFadeOut(true);
        setTimeout(() => {
          setDisplayedText("");
          setCurrentCharIndex(0);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          setFadeOut(false);
        }, 1000);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [currentCharIndex, currentTextIndex, texts, speed]);

  return (
    <span
      className={`transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {displayedText}
    </span>
  );
};

export default MovingText;
