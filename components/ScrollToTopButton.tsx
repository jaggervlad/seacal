'use client';

import { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    // listen for scroll events
    window.addEventListener('scroll', toggleVisibility);

    // clear the listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });
  };

  return (
    <div className="fixed top-[90vh] right-6">
      <div
        className={`z-10 w-12 h-12 text-2xl ${isVisible ? 'block' : 'hidden'}`}
      >
        <button
          onClick={scrollToTop}
          className="relative flex items-center justify-center w-full h-full overflow-hidden text-blue-700 duration-300 border group hover:text-blue-500"
        >
          <AiOutlineArrowUp />
        </button>
      </div>
    </div>
  );
};
