import { SmileySad } from "@phosphor-icons/react";
import { css } from "@styled-system/css";

export const Cancel = () => {
  return (
    <div
      className={css({
        display: "flex",
        flexDir: "column",
        alignItems: "center",
        textAlign: "center",
        color: "green",
      })}
    >
      <SmileySad size={44} />
      <h5
        className={css({ mt: "1.5rem", fontSize: "1.25rem", fontWeight: 600 })}
      >
        Poxa!
      </h5>
      <p>Que pena que não vai poder estar conosco!</p>
    </div>
  );
};
