"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button";
import { Dialog } from "@/components/Dialog";
import { Cancel } from "@/components/DialogContent/Cancel";
import { Confirmation } from "@/components/DialogContent/Confirmation";
import { Address } from "@/components/Sessions/Address";
import { Date } from "@/components/Sessions/Date";
import { Hero } from "@/components/Sessions/Hero";
import { Invite } from "@/components/Sessions/Invite";
import { PresentList } from "@/components/Sessions/PresentList";
import { Warnings } from "@/components/Sessions/Warnings";
import { api } from "@/lib/axios";
import { ArrowFatLinesDown } from "@phosphor-icons/react";
import { css } from "@styled-system/css";
import axios from "axios";
import { motion } from "framer-motion";
import ReactLenis from "lenis/react";

export type InviteDTO = {
  id: string;
  description: string;
  guests: {
    id: string;
    name: string;
  }[];
};

interface GuestProps {
  guest: InviteDTO | null;
}

async function getGuest(guestId: string): Promise<InviteDTO | null> {
  try {
    const res = await api.post("/invite", {
      id: guestId,
    });

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return null;
    }
    return null;
  }
}

async function confirmInvite(guestId: string): Promise<InviteDTO | null> {
  try {
    const res = await api.post("/confirmation", {
      id: guestId,
    });

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return null;
    }
    return null;
  }
}

async function confirmVan(guestId: string): Promise<InviteDTO | null> {
  try {
    const res = await api.post("/van", {
      id: guestId,
    });

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return null;
    }
    return null;
  }
}

async function cancelInvite(guestId: string): Promise<InviteDTO | null> {
  try {
    const res = await api.post("/cancel", {
      id: guestId,
    });

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return null;
    }
    return null;
  }
}

export default async function Guest({ params }: { params: { guest: string } }) {
  const [invite, setInvite] = useState<InviteDTO | null>(null);

  // const guest = await getGuest(params.guest);

  async function loadGuest() {
    const res = await getGuest(params.guest);

    setInvite(res);
  }

  useEffect(() => {
    loadGuest();
  }, []);

  // const inviteRef = useRef<HTMLDivElement>(null);

  // const scrollToInvite = () => {
  //   inviteRef.current?.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //     inline: "start",
  //   });
  // };

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
        <Hero name={invite?.description} />
        <div className={css({ pt: "25%" })}>
          <Invite />
        </div>
        <div className={css({ pt: "10%" })}>
          <Date />
        </div>
        <div className={css({ pt: "20%" })}>
          <Address
            onConfirmVan={() => {
              if (invite) {
                invite?.guests?.map((guest) => {
                  confirmVan(guest.id);
                });
              }
            }}
          />
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
              <Button
                w={"100%"}
                onClick={() => {
                  if (invite) {
                    invite?.guests?.map((guest) => {
                      confirmInvite(guest.id);
                    });
                  }
                }}
              >
                Confirmar presença
              </Button>
            </Dialog.Trigger>
            <Dialog.Content>
              <Confirmation />
            </Dialog.Content>
          </Dialog.Root>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button
                w={"100%"}
                variant="link"
                onClick={() => {
                  if (invite) {
                    invite?.guests?.map((guest) => {
                      cancelInvite(guest.id);
                    });
                  }
                }}
              >
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
