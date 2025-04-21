import React from "react";
import Head from "next/head";
import MainLayout from "@/components/common/layouts/MainLayout";

export default function FoodDetail() {
  return (
    <>
      <Head>
        <title>Foods Detail</title>
      </Head>
      <div>
        <h1>Food Detail</h1>
      </div>
    </>
  );
}

FoodDetail.getLayout = (pageProps) => (
  <MainLayout>
    <FoodDetail {...pageProps} />
  </MainLayout>
);
