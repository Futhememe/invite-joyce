"use client";
import { ArrowDown } from "@phosphor-icons/react";
import { button, container, description } from "./styles";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface MoreButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const MoreButton = ({ ...rest }: MoreButtonProps) => {
  return (
    <div className={container}>
      <button className={button} {...rest}>
        <ArrowDown size={32} />
      </button>
      <p className={description}>Aperte para mais</p>
    </div>
  );
};
