import Head from "next/head";
import MainLayout from "@/components/common/layouts/MainLayout";
import { useRouter } from "next/router";
import { customerListData } from "@/data";
import { useEffect, useState } from "react";
import PageTitle from "@/components/common/PageTitle";
import styles from "@/styles/customerDetail.module.css";
import IconMaker from "@/components/pages/customers/IconMaker";
import CustomBtn from "@/components/pages/customers/CustomBtn";
import CreditCard from "@/components/pages/customers/CreditCard";

export default function CustomerDetail() {
  const router = useRouter();
  const orderId = router.query.id;
  const [currentOrder, setCurrentOrder] = useState(null);

  useEffect(() => {
    const topilganOrder = customerListData.find(
      (order) => order.customerId == router.query.id
    );
    setCurrentOrder(topilganOrder);
  }, [router]);

  return (
    <>
      <Head>
        <title>
          {currentOrder
            ? "Order Detail: " + currentOrder.customerId
            : "Tovar not found"}
        </title>
      </Head>
      <div>
        {currentOrder ? (
          <>
            <PageTitle
              title="Customer Detail"
              subtitle="Here your Customer Detail Profile"
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "40px",
              }}
            >
              <div className={styles.userData}>
                <div className={styles.userAva}></div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className={styles.customerDataDv}>
                      <h2>{currentOrder.customerName}</h2>
                      <p className={styles.p}>{currentOrder.field}</p>
                      <p>{currentOrder.location}</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                      }}
                    >
                      <CustomBtn back="#00B07426" icon="/customBtn1.png" />
                      <CustomBtn back="#5E6C9326" icon="/customBtn2.png" />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "40px",
                    }}
                  >
                    <IconMaker
                      back="#2D9CDB26"
                      icon="/customerIcon1.png"
                      text={currentOrder.email}
                    />
                    <IconMaker
                      back="#2D9CDB26"
                      icon="/customerIcon2.png"
                      text={currentOrder.phone}
                    />
                    <IconMaker
                      back="#2D9CDB26"
                      icon="/customerIcon3.png"
                      text={currentOrder.job}
                    />
                  </div>
                </div>
              </div>
              <CreditCard card={currentOrder.creditCard} />
            </div>
          </>
        ) : (
          <p
            style={{
              fontSize: "50px",
              fontWeight: "bolder",
            }}
          >
            Tovar not found
          </p>
        )}
      </div>
    </>
  );
}

CustomerDetail.getLayout = (pageProps) => (
  <MainLayout>
    <CustomerDetail {...pageProps} />
  </MainLayout>
);
