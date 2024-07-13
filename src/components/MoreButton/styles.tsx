import { css } from "@styled-system/css";

export const container = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  textAlign: "center",
  zIndex: 1,
});

export const button = css({
  display: "flex",
  w: "76px",
  h: "76px",
  borderRadius: "full",
  alignItems: "center",
  justifyContent: "center",

  bgColor: "lightgreen",
});

export const description = css({
  fontSize: "md",
  color: "green",
});
