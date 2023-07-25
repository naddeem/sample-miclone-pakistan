import React from "react";

const Offer = ({ src, link, index }) => {
  return (
    <a href={link}>
      <img src={src} alt={`${index} offer  `} width={420} height={320} />
    </a>
  );
};

export default Offer;
