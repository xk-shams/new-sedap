import React from "react";
import Image from "next/image";
import SearchBtn from "./SearchBtn";

function Search() {
  const btnArr = [
    {
      id: 1,
      img: "/search.png",
      num: 2,
      back: "#2D9CDB26",
    },
    {
      id: 2,
      img: "/search2.png",
      num: 7,
      back: "#2D9CDB26",
    },
    {
      id: 3,
      img: "/search3.png",
      num: 1,
      back: "#5E6C9326",
    },
    {
      id: 4,
      img: "/search4.png",
      num: 3,
      back: "#FF5B5B26",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: "40px",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "58%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid #ebebeb",
          borderRadius: "8px",
        }}
      >
        <input
          placeholder="Search here"
          style={{
            width: "100%",
            borderRadius: "8px",
            border: "none",
            padding: "15px 28px",
            fontWeight: 400,
            fontSize: "16px",
          }}
        />
        <Image
          src="/searchLogo.png"
          alt="d"
          width={24}
          height={24}
          style={{
            position: "absolute",
            backgroundColor: "white",
            padding: "2px",
            right: "28px",
          }}
        />
      </div>

      <div>
        {btnArr.map((item) => (
          <SearchBtn
            key={item.id}
            img={item.img}
            num={item.num}
            back={item.back}
          />
        ))}
      </div>
      <hr
        style={{
          width: "1px",
          height: "56px",
          borderRadius: "8px",
          background: "#d0d6de",
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <h3>Hello, Samantha</h3>
        <button
          style={{
            background: "#c4c4c4",
            border: "4px solid #ffffff",
            padding: "25px",
            borderRadius: "50%",
          }}
        ></button>
      </div>
    </div>
  );
}

export default Search;
