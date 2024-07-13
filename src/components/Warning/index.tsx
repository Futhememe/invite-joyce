import { ReactNode, useRef } from "react";
import {
  Description,
  Title,
  container,
  descriptionContainer,
  Icon,
} from "./styles";
import { SlideInState, slideIn } from "@animations/slideIn";
import { useInView } from "framer-motion";
import { BouncyInState, bouncyIn } from "@animations/bouncyIn";

interface WarningProps {
  title: string;
  description: string | ReactNode;
  icon?: ReactNode;
}

export const Warning = ({ title, description, icon }: WarningProps) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);

  return (
    <div ref={containerRef} className={container}>
      <Icon
        animate={isInView ? BouncyInState.VISIBLE : BouncyInState.OUTOFVIEW}
        variants={bouncyIn}
      >
        {icon}
      </Icon>
      <div className={descriptionContainer}>
        <Title
          animate={isInView ? SlideInState.VISIBLE : SlideInState.OUTOFVIEW}
          variants={slideIn}
        >
          {title}
        </Title>
        <Description
          animate={isInView ? SlideInState.VISIBLE : SlideInState.OUTOFVIEW}
          variants={slideIn}
        >
          {description}
        </Description>
      </div>
    </div>
  );
};
