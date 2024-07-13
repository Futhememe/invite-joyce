import { css } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import { motion } from "framer-motion";

export const container = css({
  display: "flex",
  flexDir: "column",
  gap: "1rem",
  justifyContent: "center",
  alignItems: "center",

  fontFamily: "body",

  zIndex: 1,
});

export const Icon = styled(motion["div"], {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    minW: "3.125rem",
    minH: "3.125rem",

    borderRadius: "full",
    bgColor: "lightgreen",

    color: "green",
  },
});

export const descriptionContainer = css({
  display: "flex",
  flexDir: "column",
});

export const Title = styled(motion["h2"], {
  base: {
    textAlign: "center",
    fontSize: "1.25rem",
    fontWeight: 600,
    color: "green",
  },
});

export const Description = styled(motion["p"], {
  base: {
    textAlign: "center",
    fontSize: "1rem",
    fontWeight: 500,
    color: "green",
  },
});
