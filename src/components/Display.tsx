"use client";
import { css } from "@styled-system/css";
import { SlideInState, slideIn } from "@animations/slideIn";
import { ReactNode, useRef } from "react";
import { useInView, motion } from "framer-motion";

interface DisplayProps {
  children: ReactNode;
}

export const Display = ({ children }: DisplayProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.h2
      ref={ref}
      className={css({
        fontSize: "5xl",
        fontFamily: "display",
        fontWeight: "bold",
        color: "green",
      })}
      animate={isInView ? SlideInState.VISIBLE : SlideInState.OUTOFVIEW}
      variants={slideIn}
    >
      {children}
    </motion.h2>
  );
};
