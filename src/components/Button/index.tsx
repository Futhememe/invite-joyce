import { styled } from "@styled-system/jsx";

export const Button = styled("button", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    p: "1rem",
    borderRadius: "8px",
    fontFamily: "body",
    fontWeight: 500,

    lineHeight: "tight",
  },
  variants: {
    variant: {
      default: {
        bgColor: "green",
        color: "white",
        cursor: "pointer",
        "&:disabled": {
          bgColor: "gray.200",
        },
      },
      link: {
        textDecorationLine: "underline",
        color: "green",
        cursor: "pointer",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
