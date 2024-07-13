import { css } from "@styled-system/css";
import { Display } from "../Display";
import { Caption } from "../Caption";
import { Warning } from "../Warning";
import {
  Clock,
  DeviceMobile,
  UserCircleMinus,
  Palette,
  CheckCircle,
} from "@phosphor-icons/react";
import { Plant } from "../Plant";

export const Warnings = () => {
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
        <Display>Avisos !</Display>
        <Caption>
          Neste dia especial queremos que você, nosso convidado, esteja muito
          confortável então para que todos aproveitem ao máximo a festa temos
          alguns avisos e regras de boas práticas:
        </Caption>
        <div
          className={css({
            display: "flex",
            flexDir: "column",
            gap: "1.5rem",
            position: "relative",
            mt: "1.5rem",
          })}
        >
          <Warning
            icon={<Palette size={24} />}
            title="Lembre-se"
            description={
              <p>
                <b>Branco é a cor da noiva</b>
              </p>
            }
          />
          <Warning
            icon={<DeviceMobile size={24} />}
            title="Celulares na cerimonia"
            description={
              <p>
                Neste momento especial esperamos que você tire muitas fotos e
                compartilhe conosco todas as fotos incríveis que tirou,{" "}
                <b>apenas cuidado para nao atrapalhar o cinegrafista</b>
              </p>
            }
          />
          <Warning
            icon={<UserCircleMinus size={24} />}
            title="Convidado não convida"
            description={
              <p>
                Todos sabemos que casamento <b>não é barato</b>, então se não
                convidamos seu amigo/familiar{" "}
                <b>
                  por favor não insista pois ele não poderá entrar sem o convite
                </b>
              </p>
            }
          />
          <Warning
            icon={<Clock size={24} />}
            title="Não chegue atrasado"
            description={
              <p>
                Planejamos uma festa incrivel e queremos que você aproveite tudo
                dela
              </p>
            }
          />
          <Warning
            icon={<CheckCircle size={24} />}
            title="Presença"
            description={
              <p>
                Confirme sua presença, caso não puder comparecer avise!
                <br />
                <b>Nos dois casos você pode fazer logo abaixo</b>
              </p>
            }
          />
          <Plant css={{ left: -10, transform: "rotate(13.029deg)", top: 10 }} />
        </div>
      </div>
    </div>
  );
};
