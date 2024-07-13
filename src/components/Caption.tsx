"use client";
import { css } from "@styled-system/css";
import { SlideInState, slideIn } from "@animations/slideIn";
import { useInView, motion } from "framer-motion";
import { ReactNode, useRef } from "react";

interface CaptionProps {
  children: ReactNode;
}

export const Caption = ({ children }: CaptionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.p
      ref={ref}
      className={css({
        color: "green",
        fontWeight: 500,
        fontSize: "md",
        fontFamily: "body",
      })}
      animate={isInView ? SlideInState.VISIBLE : SlideInState.OUTOFVIEW}
      variants={slideIn}
    >
      {children}
    </motion.p>
  );
};
