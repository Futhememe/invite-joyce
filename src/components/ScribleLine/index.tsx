"use client";
import { motion, MotionProps, useInView } from "framer-motion";
import { useRef } from "react";

interface ScribleLineProps extends MotionProps {}

export const ScribleLine = ({ ...rest }: ScribleLineProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    visible: (custom: any) => ({
      opacity: 1,
      pathLength: [0, 0.5, 1],
      transition: { delay: custom },
    }),
    outOfView: (custom: any) => ({
      opacity: 0,
    }),
  };

  return (
    <svg
      width="331"
      height="67"
      viewBox="0 0 331 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
    >
      <motion.path
        d="M232.916 2C155.103 2.6082 -14.8177 9.93369 3.34945 47.222C19.6765 73.5483 252.329 67.8929 309.732 48.083C367.136 28.2731 288.301 7.65998 178.415 14.9584"
        stroke="#E7EDDF"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        animate={isInView ? "visible" : "outOfView"}
        variants={variants}
        {...rest}
      />
    </svg>
  );
};
