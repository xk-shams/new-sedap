import React from "react";
import Image from "next/image";

function CustomBtnFood(props) {
  const { back, img } = props;
  return (
    <button
      style={{
        padding: "6px",
        borderRadius: "12px",
        backgroundColor: back,
        border: "none",
      }}
    >
      <Image src={img} width={24} height={24} alt="gg" />
    </button>
  );
}

export default CustomBtnFood;
