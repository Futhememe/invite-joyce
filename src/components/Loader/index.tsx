"use client";
import { motion } from "framer-motion";
import { css } from "@styled-system/css";
import { Plant } from "../Plant";

export const Loader = () => {
  const size = "39";

  const variants = {
    visible: (custom: number) => ({
      y: [0, -8, -8, 0],
      transition: { delay: custom * 0.4, repeat: Infinity, repeatDelay: 4 },
    }),
  };

  return (
    <motion.div
      className={css({
        display: "flex",
        zIndex: 3,
        top: 0,
        position: "absolute",
        w: "100vw",
        h: "100vh",
        bgColor: "green",
        gap: "1rem",

        justifyContent: "center",
        alignItems: "center",
      })}
    >
      <motion.div custom={0} animate="visible" variants={variants}>
        <Plant size={size} css={{ position: "relative" }} />
      </motion.div>
      <motion.div custom={1} animate="visible" variants={variants}>
        <Plant size={size} variant="Second" css={{ position: "relative" }} />
      </motion.div>
      <motion.div custom={2} animate="visible" variants={variants}>
        <Plant size={size} variant="Tertiary" css={{ position: "relative" }} />
      </motion.div>
      <motion.div custom={3} animate="visible" variants={variants}>
        <Plant size={size} variant="Fourth" css={{ position: "relative" }} />
      </motion.div>
      <motion.div custom={4} animate="visible" variants={variants}>
        <Plant size={size} variant="Fifth" css={{ position: "relative" }} />
      </motion.div>
    </motion.div>
  );
};
