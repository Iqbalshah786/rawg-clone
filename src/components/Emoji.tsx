import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bullsEye.png";
import meh from "../assets/meh.png";
import thumbsUp from "../assets/thumbsUp.png";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "40px" },
    4: { src: bullsEye, alt: "exceptional", boxSize: "50px" },
    5: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
