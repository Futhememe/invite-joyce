import Image from "next/image";
import photo from "@/assets/photo.jpeg";
import { background, container, image, imageContainer } from "./styles";

export const PhotoCard = () => {
  return (
    <div className={container}>
      <div className={imageContainer}>
        <Image src={photo} alt="me and her" className={image} />
      </div>
      <div className={background} />
    </div>
  );
};
