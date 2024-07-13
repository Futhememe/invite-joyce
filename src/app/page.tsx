"use client";

import { Button } from "@/components/Button";
import { Address } from "@/components/Sessions/Address";
import { Date } from "@/components/Sessions/Date";
import { Hero } from "@/components/Sessions/Hero";
import { Invite } from "@/components/Sessions/Invite";
import { PresentList } from "@/components/Sessions/PresentList";
import { Warnings } from "@/components/Sessions/Warnings";
import { ArrowFatLinesDown } from "@phosphor-icons/react";
import { css } from "@styled-system/css";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@/components/Dialog";
import { Confirmation } from "@/components/DialogContent/Confirmation";
import { Cancel } from "@/components/DialogContent/Cancel";
import ReactLenis from "lenis/react";

export default function Home() {
  const inviteRef = useRef<HTMLDivElement>(null);

  const scrollToInvite = () => {
    inviteRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };

  return (
    <ReactLenis root>
      <main
        className={css({
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflowX: ["hidden", "hidden", "visible"],
          pb: 6,
          maxW: "39.375rem",
        })}
      >
        <Hero onClickMore={scrollToInvite} />
        <div ref={inviteRef} className={css({ pt: "25%" })}>
          <Invite />
        </div>
        <div className={css({ pt: "25%" })}>
          <Date />
        </div>
        <div className={css({ pt: "20%" })}>
          <Address onConfirmVan={() => {}} />
        </div>
        <div className={css({ pt: "20%" })}>
          <PresentList />
        </div>
        <div className={css({ pt: "10%" })}>
          <Warnings />
        </div>
        <motion.div
          className={css({
            display: "flex",
            w: "100%",
            justifyContent: "center",
            color: "green",
          })}
        >
          <ArrowFatLinesDown size={32} />
        </motion.div>
        <div
          className={css({
            display: "flex",
            flexDir: "column",
            gap: "1.5rem",
            justifyContent: "center",
            mt: "3.63rem",
            px: 6,
          })}
        >
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button w={"100%"}>Confirmar presença</Button>
            </Dialog.Trigger>
            <Dialog.Content>
              <Confirmation />
            </Dialog.Content>
          </Dialog.Root>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button w={"100%"} variant="link">
                Não vou poder ir ;--;
              </Button>
            </Dialog.Trigger>
            <Dialog.Content>
              <Cancel />
            </Dialog.Content>
          </Dialog.Root>
        </div>
      </main>
    </ReactLenis>
  );
}
