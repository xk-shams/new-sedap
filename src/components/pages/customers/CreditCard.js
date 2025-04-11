import React from "react";
import Image from "next/image";
import styles from "@/styles/customerDetail.module.css";
function CreditCard(props) {
  const { card } = props;
  return (
    <div
      style={{
        width: "457px",
        backgroundColor: "#00B074",
        borderRadius: "16px",
      }}
    >
      <div
        style={{
          padding: "25px 37px 0 37px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "8px",
          }}
        >
          <p
            style={{
              fontFamily: "Barlow",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "23px",
              letterSpacing: "0px",
              color: "#FFFFFF",
            }}
          >
            Your Balance
          </p>
          <button className={styles.dots}>
            <Image
              src={"/threeDots.png"}
              width={32}
              height={26}
              alt="gg"
            ></Image>
          </button>
        </div>
        <h1
          style={{
            color: "#FFFFFF",
            fontWeight: "700",
            fontSize: "52px",
            lineHeight: "100%",
            marginBottom: "23px",
          }}
        >
          $ {card.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "27px",
          }}
        >
          <p
            style={{
              fontWeight: "500",
              fontSize: "21px",
              color: "#FFFFFF",
              lineHeight: "100%",
              letterSpacing: "0px",
              verticalAlign: "middle",
            }}
          >
            {card.cardNum
              .split(" ")
              .map((block, index) => (index === 0 ? block : "****"))
              .join(" ")}
          </p>
          <p
            style={{
              fontWeight: "500",
              fontSize: "21px",
              color: "#FFFFFF",
              lineHeight: "100%",
              letterSpacing: "0px",
              verticalAlign: "middle",
            }}
          >
            {card.exp}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "21px 36px 27px 37px",
          backgroundColor: "#40134726",
          backdropFilter: "blur(150px)",
          borderBottomLeftRadius: "16px",
          borderBottomRightRadius: "16px",
        }}
      >
        <div>
          <p
            style={{
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "26px",
              letterSpacing: "0px",
              verticalAlign: "middle",
              color: "#FFFFFF",
              marginBottom: "3px",
            }}
          >
            Name
          </p>
          <p
            style={{
              fontWeight: "500",
              fontSize: "21px",
              lineHeight: "100%",
              letterSpacing: "0px",
              color: "#FFFFFF",
            }}
          >
            {card.owner}
          </p>
        </div>
        <Image src={"/cardIcon.png"} width={60} height={57} alt="card" />
      </div>
    </div>
  );
}

export default CreditCard;
