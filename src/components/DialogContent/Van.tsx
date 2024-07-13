import { Van as VanIcon } from "@phosphor-icons/react";
import { css } from "@styled-system/css";
import { Button } from "../Button";
import { useEffect, useState } from "react";

interface IVan {
  onConfirm: () => void;
}

export const Van = ({ onConfirm }: IVan) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsDisabled(false);
    }, 4000);
  }, []);

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
      <VanIcon size={44} />
      <h5
        className={css({
          mt: "1.5rem",
          fontSize: "1.25rem",
          mb: "1rem",
          fontWeight: 600,
        })}
      >
        Leia antes de confirmar
      </h5>
      <p>
        Queremos que todos cheguem confortáveis no local do casamento. Com isso
        pensamos em pedir uma van para todos que não tem carro, possam chegar em
        tempo hábil para a cerimônia.
        <b>
          Então, caso você tenha carro, por favor, opte por usa - lo ao invés da
          van
        </b>
      </p>
      <Button onClick={onConfirm} disabled={isDisabled} w="100%" mt="1rem">
        Confirmar
      </Button>
    </div>
  );
};
