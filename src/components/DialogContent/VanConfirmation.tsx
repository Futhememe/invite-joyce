import { CheckCircle } from "@phosphor-icons/react";
import { css } from "@styled-system/css";

export const VanConfirmation = () => {
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
        Que legal vamos todos juntos!!
      </h5>
      <p>
        Que bom que você escolheu ir de van. Assim que possivel iremos entrar em
        contato para mais informações do local de saída e horário
      </p>
    </div>
  );
};
