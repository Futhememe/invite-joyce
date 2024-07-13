"use client";
import { SystemStyleObject } from "@styled-system/types";
import { DefaultPlant } from "./Default";
import { css } from "@styled-system/css";
import { SecondPlant } from "./SecondPlant";
import { TertiaryPlant } from "./TertiaryPlant";
import { FourthPlant } from "./FourthPlant";
import { FifthPlant } from "./FifthPlant";

export interface PlantVariantProps {
  size?: string;
}

export interface PlantProps extends PlantVariantProps {
  css?: SystemStyleObject;
  variant?: "Default" | "Second" | "Tertiary" | "Fourth" | "Fifth";
}

export const PlantVariants = ({ variant, size }: PlantProps) => {
  if (variant === "Second") {
    return <SecondPlant size={size} />;
  }

  if (variant === "Tertiary") {
    return <TertiaryPlant size={size} />;
  }

  if (variant === "Fourth") {
    return <FourthPlant size={size} />;
  }

  if (variant === "Fifth") {
    return <FifthPlant size={size} />;
  }

  return <DefaultPlant size={size} />;
};

export const Plant = ({
  variant = "Default",
  size,
  css: styled,
}: PlantProps) => {
  return (
    <div className={css({ position: "absolute", ...styled })}>
      <PlantVariants variant={variant} size={size} />
    </div>
  );
};
