import React, { useEffect, useState } from "react";
import Image from "next/image";
import SearchBtn from "./SearchBtn";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mui/material";
import UserMenu from "@/components/common/UserManu";

function Search() {
  const router = useRouter();
  const isXLargeScreen = useMediaQuery("(min-width:1800px)");
  const [user, setUser] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const raw = localStorage.getItem("user");
        const parsed = raw && raw !== "undefined" ? JSON.parse(raw) : null;
        setUser(parsed);
      } catch (e) {
        console.error("JSON parse error:", e);
      }
    }
  }, []);

  const btnArr = [
    { id: 1, img: "/search.png", num: 2, back: "#2D9CDB26" },
    { id: 2, img: "/search2.png", num: 7, back: "#2D9CDB26" },
    { id: 3, img: "/search3.png", num: 1, back: "#5E6C9326" },
    { id: 4, img: "/search4.png", num: 3, back: "#FF5B5B26" },
  ];

  const handleLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("jwt");
    router.replace("/auth/login");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "25px",
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
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search here"
          style={{
            width: "100%",
            borderRadius: "8px",
            border: "none",
            padding: "15px 28px",
            fontWeight: 400,
            fontSize: "16px",
            outline: "none",
          }}
        />
        <Image
          src="/searchLogo.png"
          alt="Search Icon"
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

      {isXLargeScreen && (
        <div style={{ display: "flex", gap: "10px" }}>
          {btnArr.map((item) => (
            <SearchBtn
              key={item.id}
              img={item.img}
              num={item.num}
              back={item.back}
            />
          ))}
        </div>
      )}

      <hr
        style={{
          width: "1px",
          height: "56px",
          borderRadius: "8px",
          background: "#d0d6de",
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <h3 style={{ fontWeight: "600", fontSize: "16px", lineHeight: "100%" }}>
          <span style={{ fontWeight: "400" }}>Hello</span>, {user?.username}
        </h3>

        <UserMenu
          logOut={handleLogOut}
          avatar={user?.avatar}
          style={{
            background: "#c4c4c4",
            border: "4px solid #ffffff",
            padding: "27px 20px",
            borderRadius: "50%",
          }}
        />
      </div>
    </div>
  );
}

export default Search;
