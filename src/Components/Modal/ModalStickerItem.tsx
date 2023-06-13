import React from "react";

interface StickerProps {
  alt: string;
  isSelected: boolean;
  onClick: () => void;
}

const Sticker = (props: StickerProps) => (
  <img
    src={`/img/sticker/${props.alt}.png`}
    alt={props.alt}
    className={props.isSelected ? "selected" : ""}
    onClick={props.onClick}
  />
);

export default Sticker;
