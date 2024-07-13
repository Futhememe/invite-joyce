import { CheckCircle } from "@phosphor-icons/react";
import { css } from "@styled-system/css";

export const Confirmation = () => {
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
      <CheckCircle size={44} />
      <h5
        className={css({ mt: "1.5rem", fontSize: "1.25rem", fontWeight: 600 })}
      >
        Obrigado por confirmar sua presença!
      </h5>
      <p>
        Estamos ansiosos para nosso grande dia e mais ansiosos para
        compartilha-lo com você
      </p>
    </div>
  );
};
