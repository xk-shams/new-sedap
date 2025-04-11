import React from "react";
import Image from "next/image";

function IconMaker(props) {
  const { back, icon, text } = props;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "28px",
          maxHeight: "28px",
          borderRadius: "8px",
          marginRight: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "4px",
          backgroundColor: back,
        }}
      >
        <Image src={icon} width={20} height={20} alt="icon" />
      </div>
      <p
        style={{
          fontWeight: "500",
          fontSize: "18px",
          lineHeight: "100%",
          color: "#464255",
        }}
      >
        {text}
      </p>
    </div>
  );
}

export default IconMaker;
