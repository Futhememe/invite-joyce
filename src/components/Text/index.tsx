"use client";
import { css } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import { JsxStyleProps } from "@styled-system/types";
import { useInView, motion } from "framer-motion";
import { ReactNode, useRef } from "react";

interface CaptionProps {
  children: ReactNode;
}

const StyledText = styled(motion["p"]);

export const Text = ({ children }: CaptionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    visible: (custom: any) => ({
      opacity: [0, 0.25, 0.5, 1],
      y: [-16, -8, -4, 0],
      transition: { delay: 0.4 },
    }),
    outOfView: (custom: any) => ({
      opacity: 0,
    }),
  };

  return (
    <StyledText
      ref={ref}
      color="green"
      fontWeight={600}
      fontSize="1.25rem"
      fontFamily="body"
      animate={isInView ? "visible" : "outOfView"}
      variants={variants}
      zIndex={2}
    >
      {children}
    </StyledText>
  );
};
