import React, { useEffect, useState } from "react";

function Animate() {
  const texts = [
    "Hi, This is Tanveer Anjum",
    "I am a FullStack Developer",
    "I am a WordPress Developer",
  ];

  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));

      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }

      if (endValue > texts[index].length + 2) {
        setTimeout(() => setIsForward(false), 500); // Wait before deleting
      }

      if (endValue < 1 && !isForward) {
        setTimeout(() => {
          setIsForward(true);
          setIndex((prev) => (prev + 1) % texts.length);
          setEndValue(0); // Reset for new text
        }, 500); // Pause before new text
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return (
    <div className="transition ease-in-out duration-300 text-xl md:text-4xl font-semibold text-blue-300">
      {currentText}
    </div>
  );
}

export default Animate;
