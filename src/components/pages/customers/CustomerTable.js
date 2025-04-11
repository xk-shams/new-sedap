import React from "react";
import styles from "@/styles/customers.module.css";
import { customerListData } from "@/data";
import { useRouter } from "next/router";

export default function CustomerTable() {
  const columns = [
    {
      id: "0",
      name: "Customer ID",
    },
    {
      id: "1",
      name: "Join Date",
    },
    {
      id: "2",
      name: "Customer Name",
    },
    {
      id: "3",
      name: "Location",
    },
    {
      id: "4",
      name: "Total Spent",
    },
    {
      id: "5",
      name: "Last Order",
    },
  ];

  return (
    <table className={styles["orderTable"]}>
      <thead>
        <tr className={styles["tr"]}>
          {columns.map((col) => (
            <TableHead key={col.id} name={col.name} />
          ))}
        </tr>
      </thead>
      <tbody>
        <tr style={{ height: "40px" }}></tr>
        {customerListData.map((item) => (
          <TableRow key={item.userId} item={item} />
        ))}
      </tbody>
    </table>
  );
}

function TableHead({ name }) {
  return (
    <th className={styles["th"]}>
      <div>
        <p>{name}</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "10px",
          }}
        ></div>
      </div>
    </th>
  );
}

function TableRow(props) {
  const { item } = props;
  const router = useRouter();

  const goToDetails = (itemId) => {
    router.push(`/customers/${itemId}`);
  };

  return (
    <tr
      className={styles["hoverTr"]}
      style={{ cursor: "pointer" }}
      onClick={() => goToDetails(item.customerId)}
    >
      <td className={styles["td"]}>#{item.customerId}</td>
      <td className={styles["td"]}>{item.date}</td>
      <td className={styles["td"]}>{item.customerName}</td>
      <td className={styles["td"]}>{item.location}</td>
      <td className={styles["td"]}>${item.spent}</td>
      <td className={styles["td"]}>${item.lastOrder}</td>
    </tr>
  );
}
