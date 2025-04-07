import React from "react";
import Head from "next/head";
import Link from "next/link";
import Status from "./Status";
import Calendar from "./Calendar";
import styles from "@/styles/order.module.css";
import Table from "../pages/orders/Table";

export default function Section() {
  return (
    <>
      <Head></Head>
      <div>
        <div className={styles["orderDiv"]}>
          <div className={styles["calendar"]}>
            <Status />
            <Calendar />
          </div>
        </div>
        <div className={"tableData"}>
          <Table />
        </div>
      </div>
    </>
  );
}
