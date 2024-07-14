import { css } from "@styled-system/css";
import { Display } from "../Display";
import { Caption } from "../Caption";
import { Plant } from "../Plant";
import { ScribleLine } from "../ScribleLine";
import { Text } from "../Text";

export const Date = () => {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        p: "6",
        alignItems: "center",
        position: "relative",
      })}
    >
      <div
        className={css({
          display: "flex",
          flexDir: "column",
          gap: 6,
          zIndex: 1,
        })}
      >
        <Display>O dia e a hora</Display>
        <Caption>
          Escolhemos um sábado para que todos consigam estar nesse dia especial
          e tenham bastante tempo para aproveitar
        </Caption>

        <div
          className={css({
            display: "flex",
            flexDir: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            pt: "1rem",
          })}
        >
          <Text>
            10 de Agosto de 2024 <br />
            às 17:00
          </Text>
          <div className={css({ position: "absolute" })}>
            <ScribleLine custom={0.8} />
          </div>
        </div>
      </div>
      <div className={css({ zIndex: 1, mt: "2.37rem" })}>
        <Caption>
          <b>Padrinhos chegar com 1h de antecedência</b>
        </Caption>
      </div>
      <Plant
        variant="Fifth"
        css={{ transform: "rotate(117.981deg)", top: -8, left: -16 }}
      />
    </div>
  );
};
