import React from "react";
import PageTitle from "@/components/common/PageTitle";
import OrderTable from "./OrdersTable";
import Calendar from "@/components/common/Calendar";
import Status from "@/components/common/Status";
import styles from "@/styles/order.module.css";

function OrdersList() {
  return (
    <>
      <div className={styles["orderDiv"]}>
        <PageTitle
          title="Your Orders"
          subtitle="This is your order list data"
        />
        <div className={styles["calendar"]}>
          <Status />
          <Calendar />
        </div>
      </div>
      <OrderTable />
    </>
  );
}

export default OrdersList;
