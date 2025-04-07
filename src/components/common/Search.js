import React from "react";
import Image from "next/image";
import styles from "@/styles/Aside.module.css";
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
    <div className={styles.searchMain}>
      <div className={styles.searchInputDv}>
        <input placeholder="Search here" />
        <Image src="/searchLogo.png" alt="d" width={24} height={24} />
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
      <hr />
      <div className={styles.profilDv}>
        <h3>Hello, Samantha</h3>
        <button></button>
      </div>
    </div>
  );
}

export default Search;
