import { css } from "@styled-system/css";
import { Display } from "../Display";
import { Caption } from "../Caption";
import { PhotoCard } from "../PhotoCard";
import { Plant } from "../Plant";

export const Invite = () => {
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
      <div className={css({ display: "flex", flexDir: "column", gap: "6" })}>
        <Display>O Convite</Display>
        <Caption>
          Nosso casamento está chegando e queremos muito que você participe
          desse momento mais que especial em nossas vidas. Nesse convite vamos
          explicar tudo que você precisa saber para aproveitar esse dia conosco
        </Caption>
      </div>
      <div
        className={css({ display: "flex", pt: "6.5rem", position: "relative" })}
      >
        <Plant variant="Tertiary" css={{ top: -4, right: -16 }} />
        <PhotoCard />
        <Plant
          variant="Fourth"
          css={{
            zIndex: 2,
            bottom: -32,
            left: -20,
            transform: "rotate(90.049deg)",
          }}
        />
      </div>
    </div>
  );
};
