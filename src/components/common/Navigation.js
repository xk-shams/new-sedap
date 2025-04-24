import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "@/styles/Aside.module.css";
import {
  CiBank,
  CiChat1,
  CiWallet,
  CiCalendar,
  CiForkAndKnife,
  CiAlignBottom,
  CiViewList,
  CiUser,
  CiStar,
} from "react-icons/ci";
import Image from "next/image";

function Navigation(props) {
  const router = useRouter();

  const links = [
    {
      id: 1,
      linkName: "Dashboard",
      icon: CiBank,
      href: "/dashboard",
    },
    {
      id: 2,
      linkName: "Order List",
      icon: CiViewList,
      href: "/orders",
    },
    {
      id: 4,
      linkName: "Customers",
      icon: CiUser,
      href: "/customers",
    },
    {
      id: 5,
      linkName: "Analytics",
      icon: CiAlignBottom,
      href: "/analis",
    },
    {
      id: 6,
      linkName: "Review",
      icon: CiStar,
      href: "/review",
    },
    {
      id: 7,
      linkName: "Foods",
      icon: CiForkAndKnife,
      href: "/foods",
    },
    {
      id: 10,
      linkName: "Calendar",
      icon: CiCalendar,
      href: "/calendar",
    },
    {
      id: 11,
      linkName: "Chat",
      icon: CiChat1,
      href: "/chat",
    },
    {
      id: 12,
      linkName: "Wallet",
      icon: CiWallet,
      href: "/wallet",
    },
  ];

  return (
    <div>
      <Head />
      <aside className={styles["aside"]}>
        <div className={styles["aside-header"]}>
          <Image
            src="/Sedap.png"
            alt=""
            className={styles["logo"]}
            width={167}
            height={49}
          />
          <p
            style={{
              color: "#B9BBBD",
              fontSize: "18px",
              backgroundColor: "unset",
            }}
          >
            Modern Admin Dashboard
          </p>
        </div>
        <div className={styles["buttonsMenu"]}>
          {links.map(({ id, href, linkName, icon }) => {
            const active = router.pathname.startsWith(href);
            return (
              <CustomLink
                key={id}
                linkName={linkName}
                icon={icon}
                href={href}
                active={active}
              />
            );
          })}
        </div>
        <div className={styles["addMenus"]}>
          <div className={styles["addMenusText"]}>
            <p>Please, organize your menus through button bellow!</p>
            <button>+Add Menus</button>
          </div>
          <Image src="/illustration.png" width={77} height={91} alt="grand" />
        </div>
        <div className={styles["about"]}>
          <p>Sedap Restaurant Admin Dashboard</p>
          <p>© 2020 All Rights Reserved</p>
          <p>Made with ♥ by Peterdraw</p>
        </div>
      </aside>
      {/* <Section/> */}
    </div>
  );
}

function CustomLink(props) {
  const { linkName, icon: Icon, href, active } = props;
  return (
    <Link
      className={`${active ? styles.active : ""}`}
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        background: active ? "#00B07426" : "",
        color: active === href ? "#177556" : "",
        padding: "12px 20px",
        borderRadius: "12px",
        textDecoration: "none",
        fontWeight: 500,
      }}
    >
      <Icon
        style={{ fontSize: "25px", color: active ? "#00B074" : "#B9BBBD" }}
      />
      {linkName}
    </Link>
  );
}

export default Navigation;
