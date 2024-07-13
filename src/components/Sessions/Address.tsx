import { css } from "@styled-system/css";
import localPhoto from "@/assets/local.jpeg";
import { Display } from "../Display";
import { Caption } from "../Caption";
import Image from "next/image";
import { Plant } from "../Plant";
import { Button } from "../Button";
import { useState } from "react";

interface IAddress {
  onConfirmVan: () => void;
}

export const Address = ({ onConfirmVan }: IAddress) => {
  function openAddress() {
    window.open(
      "https://www.google.com/maps/place/Rua+Seikiti+Nakayama,+72+-+Vila+Boa+Vista,+Barueri+-+SP,+06414-005/@-23.4937516,-46.871904,17z/data=!3m1!4b1!4m6!3m5!1s0x94cf03b7062d4593:0x3a38bc4bf92cb720!8m2!3d-23.4937516!4d-46.871904!16s%2Fg%2F11f1z3wjg_?entry=ttu",
      "blank"
    );
  }

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      })}
    >
      <div
        className={css({
          display: "flex",
          flexDir: "column",
          gap: "6",
          px: "6",
        })}
      >
        <Display>O Local</Display>
        <Caption>
          Escolhemos um local super aconchegante e super instagramavel para você
          tirar muitas fotos conosco e celebrar muito
          <br />
          <div className={css({ pt: "4" })} />
          Venha aproveitar conosco no:
          <br />
          <div className={css({ pt: "4" })} />
          DIVINAS FEZTAS
          <br />
          Endereço:{" "}
          <b>Rua Dempachi Nakayama, 72 - Vila Boa Vista, Barueri, SP</b>
        </Caption>
      </div>

      {/* <div
        className={css({
          w: "100%",
          maxW: "100vw",
          mt: "30%",
          borderTop: "4px solid #E7EDDF",
          borderBottom: "4px solid #E7EDDF",
          position: "relative",
        })}
      >
        <Plant
          size="141"
          css={{ transform: "rotate(-111.924deg)", top: -44, right: 8 }}
        />
        <Image src={localPhoto} alt="foto do local" />
        <Plant
          size="141"
          css={{ transform: "rotate(63.815deg)", bottom: -44, left: 8 }}
        />
      </div> */}
      <div className={css({ zIndex: 1, mt: "2.37rem" })}>
        <Button variant="default" onClick={openAddress}>
          Saiba como chegar
        </Button>
      </div>
    </div>
  );
};
