import React, { useState, useEffect } from "react";
import { prof } from "../constants/data";

const Typewriter: React.FC = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState<number>(0);
  const [displayedItem, setDisplayedItem] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(true);

  useEffect(() => {
    const typewriterInterval = setInterval(() => {
      const currentItem = prof[currentItemIndex];
      const currentLength = displayedItem.length;

      if (isTyping) {
        if (currentLength < currentItem.length) {
          setDisplayedItem(currentItem.substring(0, currentLength + 1));
        } else {
          setIsTyping(false);
        }
      } else {
        if (currentLength > 0) {
          setDisplayedItem(currentItem.substring(0, currentLength - 1));
        } else {
          setIsTyping(true);
          setCurrentItemIndex((prevIndex) => (prevIndex + 1) % prof.length);
        }
      }
    }, 150);

    return () => {
      clearInterval(typewriterInterval);
    };
  }, [currentItemIndex, displayedItem, isTyping]);

  return (
    <div>
      <h1>{displayedItem}</h1>
    </div>
  );
};

export default Typewriter;
