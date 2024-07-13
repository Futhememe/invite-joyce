import { css } from "@styled-system/css";
import { Display } from "../Display";
import { Caption } from "../Caption";
import { Plant } from "../Plant";
import { Button } from "../Button";

export const PresentList = () => {
  function openGiftList() {
    window.open(
      "https://www.precolandia.com.br/gift-list-details/view/Internet",
      "blank"
    );
  }

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
        <Display>Lista de presentes</Display>
        <Caption>
          Estamos começando uma nova etapa na nossa vida e vamos precisar da sua
          ajuda, montamos uma lista de presentes que você pode olhar e nos
          ajudar com o que for melhor para você {": )"}
        </Caption>
      </div>
      <Plant css={{ top: -20, left: -16 }} variant="Second" />
      <Plant css={{ bottom: -20, right: -16 }} variant="Fourth" />

      <div className={css({ zIndex: 1 })}>
        <Button variant="link" onClick={openGiftList}>
          Lista de presentes
        </Button>
      </div>
    </div>
  );
};
