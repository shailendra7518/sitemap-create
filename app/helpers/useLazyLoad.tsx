import React, { useEffect, useRef, useState } from "react";

interface LazyLoadDivProps {
  children: React.ReactNode;
}

const UseLazyLoad: React.FC<LazyLoadDivProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <div ref={ref}>
      {isVisible ? (
        children
      ) : (
        <p className="text-sm-center text-black">Loading...</p>
      )}
    </div>
  );
};

export default UseLazyLoad;
