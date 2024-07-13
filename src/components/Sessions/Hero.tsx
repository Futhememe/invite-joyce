import { css } from "@styled-system/css";
import { Plant } from "../Plant";
import { Display } from "../Display";
import { Caption } from "../Caption";
import { MoreButton } from "../MoreButton";

interface HeroProps {
  name?: string;
  onClickMore?: () => void;
}

export const Hero = ({
  name = "Querido convidado",
  onClickMore,
}: HeroProps) => {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        p: "6",
        minH: "100vh",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
      })}
    >
      <Plant
        size="190"
        css={{ top: -6, transform: "rotate(131.101deg)", left: -10 }}
      />
      <Plant
        size="151"
        css={{ top: -24, transform: "rotate(116.474deg)", left: 6 }}
      />
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "6",
          pt: "35%",
          zIndex: 1,
        })}
      >
        <Display>{name}</Display>
        <Caption>
          Estamos muito felizes de anunciar que nosso grande dia está chegando e
          queremos que você faça parte disto conosco. Arraste para baixo para
          saber mais e como tudo irá funcionar e não esqueça de confirmar sua
          presença no final
        </Caption>
      </div>

      <MoreButton onClick={onClickMore} />
      <Plant
        variant="Second"
        size="211"
        css={{ bottom: -20, right: -6, transform: "rotate(-171.564deg)" }}
      />
      <Plant variant="Tertiary" css={{ bottom: -28, left: -10 }} />
    </div>
  );
};
