import { useState, useEffect, useRef } from "react";
import "../App.css";
import css from "./VisibilityWrapper.module.css";

const VisibilityWrapper = ({ children, delay = 0.5, fullWidth = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${css.wrapper} ${fullWidth ? css.fullWidth : ""} ${isVisible ? css.visible : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default VisibilityWrapper;
