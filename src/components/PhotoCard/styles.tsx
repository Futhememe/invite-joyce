import { css } from "@styled-system/css";

export const container = css({
  display: "flex",
  flexDirection: "column",
  position: "relative",
});

export const imageContainer = css({
  display: "flex",
  width: "17.3125rem",
  height: "24rem",
  transform: "rotate(-9.88deg)",
  flexShrink: 0,
  borderRadius: "0.25rem",
  border: "2px solid #E7EDDF",
  overflow: "hidden",
  zIndex: 1,
});

export const image = css({
  objectFit: "cover",
});

export const background = css({
  display: "flex",
  position: "absolute",
  width: "17.3125rem",
  height: "24rem",
  transform: "rotate(-5.542deg)",
  flexShrink: 0,
  borderRadius: "0.25rem",
  border: "4px solid #E7EDDF",
  top: 3,
  right: -6,
});
